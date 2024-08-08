import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {DataImage, ImagePanorama, Infospot, Viewer} from 'panolens';
import styles from './styles.module.scss';
import bedroom2 from '../media/bedroom2.png';
import coridor_stairs from '../media/coridor_stairs.png';
import bedroom1 from '../media/bedroom1.png';
import plan from '../media/plan.png';
import plan2 from '../media/plan.jpg';
import {Select, Tooltip} from "antd";


// Extend the Viewer prototype to include the getPosition method
Viewer.prototype.getPosition = function () {
  let intersects, point, panoramaWorldPosition, outputPosition;
  intersects = this.raycaster.intersectObject(this.panorama, true);

  if (intersects.length > 0) {
    point = intersects[0].point;
    panoramaWorldPosition = this.panorama.getWorldPosition();

    // Panorama is scaled -1 on X axis
    outputPosition = new THREE.Vector3(
      -(point.x - panoramaWorldPosition.x).toFixed(2),
      (point.y - panoramaWorldPosition.y).toFixed(2),
      (point.z - panoramaWorldPosition.z).toFixed(2)
    );
    return outputPosition;
  }
  return null;
};

class MyInfospot extends Infospot {
  constructor(scale = 300, imageSrc, animated) {
    super(scale, imageSrc, animated);
    this.isHovering = true;
    this.visible = true; // Ensure it's always visible
  }

  // Override the toggleInfospotVisibility method to do nothing
  toggleInfospotVisibility(isVisible, delay) {
    // Ensure it's always visible
    this.visible = true;
  }
}

const rooms = {
  0: "ROOM 1",
  1: "STAIRS",
  2: "ROOM 2"
}

const PanoramaViewer = () => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const panoramasRef = useRef([]);
  const infospotRefs = useRef([]);
  const [activeRoom, setActiveRoom] = useState(0)
  const [activeFloor, setActiveFloor] = useState('second-floor')
  console.log(activeFloor)
  useEffect(() => {
    console.log("PanoramaViewer mounted");

    if (viewerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      cameraFov: 60,
      viewIndicator: false,
      autoHideInfospot: false,
      indicatorSize: 30,
      reverseDragging: true
    });

    const panoramas = [
      new ImagePanorama(bedroom2), //panoramaIndex 0
      new ImagePanorama(coridor_stairs), //panoramaIndex 1
      new ImagePanorama(bedroom1) //panoramaIndex 2
    ];
    panoramasRef.current = panoramas;

    const infospotsData = [
      {position: [-3944.75, -1092.23, -2867.28], pointTo: 1, panoramaIndex: 0, hoverText: 'go to coridor_stairs'},
      {position: [-1671.56, -1820.95, -4336.10], pointTo: 0, panoramaIndex: 1, hoverText: 'go to bedroom 1'},
      {position: [-4598.75, -1927.29, -271.99], pointTo: 2, panoramaIndex: 1, hoverText: 'go to bedroom 2'},
      {position: [4779.88, -1274.36, -664.69], pointTo: 1, panoramaIndex: 2, hoverText: 'go to coridor_stairs'},

    ];

    infospotsData.forEach((data, index) => {
      const infospot = new MyInfospot(350, DataImage.Arrow);
      infospot.position.set(...data.position);
      infospot.addHoverText(data.hoverText);
      // infospot.show(550)
      infospot.addEventListener("click", () => {
        switchPanorama(data.pointTo);
      });
      infospotRefs.current[index] = infospot;
      panoramas[data.panoramaIndex].add(infospot);
    });

    panoramas.forEach((panorama) => {
      panorama.addEventListener("enter-fade-start", function () {
        viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
      });
      viewer.add(panorama);
    });

    viewer.OrbitControls.noZoom = true;
    viewer.OrbitControls.maxFov = 60;
    viewer.getControl().rotateSpeed *= -2;
    viewer.getControl().momentumScalingFactor *= 0;
    viewer.getCamera().updateProjectionMatrix();

    // Add click event listener to get position
    containerRef.current.addEventListener("click", (e) => {
      const position = viewer.getPosition();
      if (position) {
        console.log('Click position: ', position);
      }
    });

    viewerRef.current = viewer;

  }, []);
  const handleChangeSelect = (value) => {
    setActiveRoom(null)
    setActiveFloor(value)
  };
  const switchPanorama = (index) => {
    if (viewerRef.current && panoramasRef.current[index]) {
      setActiveRoom(index)
      viewerRef.current.setPanorama(panoramasRef.current[index]);
    }
  };
  const handleDotClick = (pointTo) => {
    // alert('Dot clicked!');
    switchPanorama(pointTo)

  };
  const floors = [
    {
      value: 'second-floor',
      title: 'Second floor',
      img: plan,
      dotPosition: [
        {top: 43, left: 30, pointTo: 0, hoverText: 'go to room - 1'},
        {top: 82, left: 64, pointTo: 1, hoverText: 'go to stairs'},
        {top: 43, left: 90, pointTo: 2, hoverText: 'go to room - 2'}
      ]
    },
    {
      value: 'first-floor',
      title: 'First floor',
      img: plan2,
      dotPosition: [
        // {top: 216, left: 46, pointTo: 0},
        // {top: 104, left: 103, pointTo: 1},
        // {top: 45, left: 38, pointTo: 2}
      ]
    },
  ]

//@params event - to check
  const onImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    console.dir(event.target)
    const x = event.clientX - rect.left; // X coordinate within the image
    const y = event.clientY - rect.top;  // Y coordinate within the image

    console.log(`Image clicked at: top: ${y}, left: ${x}`);
  };
  return (
    <div className={styles.panoramaWrap}>
      <div className={styles.imagesWrap}>
        <div className={styles.planContainer}>
          <div className={styles.imgSelectWrap}>
            {
              floors.map(floor => {
                return floor.value === activeFloor ? <React.Fragment key={floor.value}>
                  <img onClick={onImageClick} src={floor.img} alt="plan" className={styles.planImage}/>
                  {
                    floor.dotPosition.map(item => {
                      return <Tooltip placement="topLeft" title={item.hoverText}>
                        <div
                          key={`${item.top}${item.left}`}
                          style={{
                            top: `${item.top}px`,
                            left: `${item.left}px`,
                            backgroundColor: activeRoom === item.pointTo ? 'yellow' : 'red'
                          }}
                          className={styles.dot} onClick={() => handleDotClick(item.pointTo)}>
                        </div>
                      </Tooltip>
                    })
                  }
                </React.Fragment> : null
              })
            }

            <Select
              className={styles.select}
              defaultValue="second-floor"
              style={{width: '100%'}}
              onChange={handleChangeSelect}
              options={[
                {value: 'first-floor', label: 'First floor'},
                {value: 'second-floor', label: 'Second floor', disabled: false},
                {value: 'basement', label: 'Basement', disabled: true},
              ]}
            />
          </div>
        </div>

        <div className={styles.info} style={{top: '10px', right: '50%'}}>A-280 PLAN</div>
        <div className={styles.info} style={{top: '10px', right: '10%'}}>{ activeRoom !== null ? rooms[activeRoom] : '-'}</div>

        <div id="panolens" className={styles.image} ref={containerRef}></div>
      </div>

    </div>
  );
};

export default PanoramaViewer;
