import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {DataImage, ImagePanorama, Infospot, Viewer} from 'panolens';
import {Select, Spin, Tooltip} from "antd";
import styles from './styles.module.scss';
import bedroom2 from '../media/bedroom2.png';
import coridor_stairs from '../media/hallway-view3.png';
import bedroom1 from '../media/bedroom1.png';
import plan from '../media/plan.png';
import plan2 from '../media/plan.jpg';
import useAnimatedProgress from "../hooks/useAnimatedProgress";
import {HarmonyOSOutlined, LoadingOutlined, RightCircleOutlined} from '@ant-design/icons';
import createCircleWithBorder from "../utils/createCircleWithBorder";

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
  0: "BEDROOM 1",
  1: "HALLWAY",
  2: "BEDROOM 2"
}

const PanoramaViewer = () => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const panoramasRef = useRef([]);
  const infospotRefs = useRef([]);
  const cursorRef = useRef();

  const [activeRoom, setActiveRoom] = useState(0)
  const [activeFloor, setActiveFloor] = useState('second-floor')
  const [percent, resetInitValue] = useAnimatedProgress(40, 100); // Example usage
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (percent >= 100) {
      resetInitValue(70)
      setLoading(false);
    }
  }, [percent]);


  const handleChangeSelect = (value) => {
    // setActiveRoom(null)
    setActiveFloor(value)
  };

  const switchPanorama = (index) => {
    if (viewerRef.current && panoramasRef.current[index]) {
      setActiveRoom(index)
      viewerRef.current.setPanorama(panoramasRef.current[index]);
    }
  };

  const handleDotClick = (pointTo) => {
    switchPanorama(pointTo)
  };

  const floors = [
    {
      value: 'second-floor',
      title: 'Second floor',
      img: plan,
      dotPosition: [
        {top: 43, left: 30, pointTo: 0, hoverText: 'bedroom 1'},
        {top: 82, left: 64, pointTo: 1, hoverText: 'hallway'},
        {top: 43, left: 90, pointTo: 2, hoverText: 'bedroom 2'}
      ]
    },
    {
      value: 'first-floor',
      title: 'First floor',
      img: plan2,
      dotPosition: []
    },
  ]

  const onImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(`Image clicked at: top: ${y}, left: ${x}`);
  };


  useEffect(() => {
    console.log("PanoramaViewer mounted");

    if (viewerRef.current) return;

    const viewer = new Viewer({

      container: containerRef.current,
      cameraFov: 60,
      viewIndicator: false,
      autoHideInfospot: false,
      indicatorSize: 1000, //30
      reverseDragging: true,
      controlButtons: ['fullscreen'],
      dwellTime: 150,
    });

    const panoramas = [
      new ImagePanorama(bedroom2), //panoramaIndex 0
      new ImagePanorama(coridor_stairs), //panoramaIndex 1
      new ImagePanorama(bedroom1) //panoramaIndex 2
    ];
    panoramasRef.current = panoramas;

    const infospotsData = [
      {position: [-3944.75, -1092.23, -2867.28], pointTo: 1, panoramaIndex: 0, hoverText: 'HALLWAY'},
      {position: [-1671.56, -1820.95, -4336.10], pointTo: 0, panoramaIndex: 1, hoverText: 'BEDROOM 1'},
      {position: [-4598.75, -1927.29, -271.99], pointTo: 2, panoramaIndex: 1, hoverText: 'BEDROOM 2'},
      {position: [4779.88, -1274.36, -664.69], pointTo: 1, panoramaIndex: 2, hoverText: 'HALLWAY'},
    ];

    console.log(createCircleWithBorder())
    const circleOutlined = createCircleWithBorder()

    infospotsData.forEach((data, index) => {
      const infospot = new MyInfospot(350, circleOutlined);
      infospot.position.set(...data.position);
      infospot.addHoverText(data.hoverText);
      infospot.addEventListener("click", () => {
        switchPanorama(data.pointTo);
      });
      infospotRefs.current[index] = infospot;
      panoramas[data.panoramaIndex].add(infospot);
    });

    panoramas.forEach((panorama, index) => {
      console.log(panorama)
      panorama.addEventListener("enter-fade-start", function () {
        // to handle the how people will be see on initial vew panorapa - need just for panoramas add x, y , z data (viewer.tweenControlCenter)
        viewer.tweenControlCenter(new THREE.Vector3(-3762.26, -1741.48, -2784.88), 0);
      });
      panorama.addEventListener('progress', () => {
        setLoading(true);  // show the loaderd
      });
      panorama.addEventListener('load', () => {
        setLoading(false); // hide the loader
      });
      viewer.add(panorama);
    });

    viewer.OrbitControls.noZoom = true;
    viewer.OrbitControls.maxFov = 60;
    viewer.getControl().rotateSpeed *= -2;
    viewer.getControl().momentumScalingFactor *= 0;
    viewer.getCamera().updateProjectionMatrix();

    containerRef.current.addEventListener("click", (e) => {
      const position = viewer.getPosition();
      if (position) {
        console.log('Click position: ', position);
      }
    });

    viewerRef.current = viewer;

  }, []);



  useEffect(() => {
    const container = containerRef.current;

    // Create a div to act as the custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    container.appendChild(cursor);
    cursorRef.current = cursor;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();

      // Calculate the position relative to the container
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Position the custom cursor
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.visibility = 'visible';
    };

    container.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      cursor.style.visibility = 'hidden'; // Hide the cursor when leaving the container
    };

    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeChild(cursor);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.panoramaWrap}>



      {loading && (<Spin indicator={<LoadingOutlined style={{fontSize: 300}} spin/>} className={styles.spin}/>)}
      <div className={styles.imagesWrap}>
        <div className={styles.planContainer}>
          <div className={styles.imgSelectWrap}>
            {
              floors.map(floor => {
                return floor.value === activeFloor ? <React.Fragment key={floor.value}>
                  <img onClick={onImageClick} src={floor.img} alt="plan" className={styles.planImage}/>
                  {
                    floor.dotPosition.map(item => (
                      <Tooltip key={`${item.top}${item.left}`} placement="topLeft" title={item.hoverText}>
                        <div
                          style={{
                            top: `${item.top}px`,
                            left: `${item.left}px`,
                            backgroundColor: activeRoom === item.pointTo ? 'yellow' : 'red'
                          }}
                          className={styles.dot} onClick={() => handleDotClick(item.pointTo)}>
                        </div>
                      </Tooltip>
                    ))
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
        <div className={styles.info}
             style={{top: '10px', right: '10%'}}>{rooms[activeRoom]}</div>
        <div id="panolens" className={styles.image} ref={containerRef}></div>
      </div>


    </div>
  );
};

export default PanoramaViewer;
