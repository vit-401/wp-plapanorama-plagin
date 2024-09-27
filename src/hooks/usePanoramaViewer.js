import {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {Infospot, Viewer} from 'panolens';
import useCustomCursor from './useCustomCursor';
import createCircleWithBorder from "../utils/createCircleWithBorder";
import createArrowUp from "../utils/createArrowUp";
import createArrowDown from "../utils/createArrowDown";
import createArrowRight from "../utils/createArrowRight";
import createArrowLeft from "../utils/createArrowLeft";

class MyInfospot extends Infospot {
  constructor(scale = 300, imageSrc, animated) {
    super(scale, imageSrc, animated);
    this.isHovering = true;
    this.visible = true;
  }

  toggleInfospotVisibility() {
    this.visible = true;
  }
}


const usePanoramaViewer = (containerRef, panoramas, infospotsData, setActiveFloor) => {
  const viewerRef = useRef(null);
  const panoramasRef = useRef([]);
  const infospotRefs = useRef([]);
  const [direction, setDirection] = useState(0);

  const [activeRoom, setActiveRoom] = useState(0);
  const [loading, setLoading] = useState(true);

  // Use the custom cursor hook
  useCustomCursor(containerRef);

  const switchPanorama = (index) => {
    if (viewerRef.current && panoramasRef.current[index]) {
      setActiveRoom((prev) => {
        console.log(`____prev index ${prev} curent ${index}_____`)
        return index
      });
      viewerRef.current.setPanorama(panoramasRef.current[index]);
    }
  };

  const handleDotClick = (pointTo) => {
    switchPanorama(pointTo);
  };

  const onImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Image clicked at: top: ${y}, left: ${x}`);
  };

  useEffect(() => {
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


    panoramasRef.current = panoramas.map(p => p.panorama);


    const circleOutlined = createCircleWithBorder();

    infospotsData.forEach((data, index) => {
      let circleOutlinedIcon = circleOutlined
      let scale = 500
      if (data.arrowUp) circleOutlinedIcon = createArrowUp(1000)
      if (data.arrowLeft) circleOutlinedIcon = createArrowLeft(1000)
      if (data.arrowRight) circleOutlinedIcon = createArrowRight(1000)
      if (data.arrowDown) circleOutlinedIcon = createArrowDown(1000)
      if (data.arrowUp || data.arrowDown || data.arrowRight || data.arrowLeft) scale = 1000
      const infospot = new MyInfospot(scale, circleOutlinedIcon);
      infospot.position.set(...data.position);
      infospot.addHoverText(data.hoverText);
      infospot.addEventListener("click", () => {
        if (data.floor) setActiveFloor(data.floor)
        switchPanorama(data.pointTo);
      });
      infospotRefs.current[index] = infospot;
      panoramas[data.panoramaIndex].panorama.add(infospot);
    });

    panoramas.forEach((panorama) => {
      panorama.panorama.addEventListener("enter-fade-start", () => {
        viewer.tweenControlCenter(new THREE.Vector3(...(panorama.initialView || [-0, 5000, 0])), 0);
        // NEED CALL with SERGEY DESIGNER and investigate how he is created the panorams to understed the center point
        // viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0 ), 0);
      });
      panorama.panorama.addEventListener('progress', () => {
        setLoading(true);
      });
      panorama.panorama.addEventListener('load', () => {
        setLoading(false);
      });
      viewer.add(panorama.panorama);
    });

    viewer.OrbitControls.noZoom = true;
    viewer.OrbitControls.maxFov = 60;
    viewer.getControl().rotateSpeed *= -2;
    viewer.getControl().momentumScalingFactor *= 0;
    viewer.getCamera().updateProjectionMatrix();
    const controls = viewer.getControl();


    // const handleControlChange = () => {
    //   // Create a vector to store the camera's world direction
    //   const direction = new THREE.Vector3();
    //   viewer.camera.getWorldDirection(direction);
    //
    //   // Optionally, multiply the direction vector by a scalar to get a point in space
    //   // For example, if your panorama sphere has a radius of 5000 units:
    //   direction.x = -direction.x
    //   const radius = 5000; // Adjust this value based on your scene scale
    //   const lookAtPoint = direction.clone().multiplyScalar(radius);
    //
    //   // Log the point in space where the camera is looking
    //   console.log(
    //     '%cCamera is looking at point: %c[ %c%s%c, %c%s%c, %c%s%c ]',
    //     'color: blue; font-weight: bold;',      // Label style
    //     'color: black;',                        // Bracket style
    //     'color: red;', parseFloat(lookAtPoint.x.toFixed(2)), 'color: black;',   // X-coordinate
    //     'color: red;', parseFloat(lookAtPoint.y.toFixed(2)), 'color: black;', // Y-coordinate
    //     'color: red;', parseFloat(lookAtPoint.z.toFixed(2)), 'color: black;' // Z-coordinate
    //   );
    // };
    const handleControlChange = () => {
      const euler = new THREE.Euler().setFromQuaternion(viewer.camera.quaternion, 'YXZ');
      let yaw = THREE.MathUtils.radToDeg(euler.y);

      // Adjust yaw if necessary (depends on your coordinate system)
      yaw = -yaw; // Negate if needed

      // Ensure yaw is between 0 and 360 degrees
      if (yaw < 0) yaw += 360;

      setDirection(yaw);
    };

    containerRef.current.addEventListener("click", (e) => {
      const position = viewer.getPosition();
      if (position) {
        console.log('Click position: ', [parseFloat(position.x), parseFloat(position.y), parseFloat(position.z)]);
      }
    });
    controls.addEventListener('change', handleControlChange);

    viewerRef.current = viewer;
    return () => {
      controls.addEventListener('change', handleControlChange);

    }
  }, []);
  console.log(direction, 'DIRECTION')
  return {
    viewerRef,
    panoramasRef,
    infospotRefs,
    activeRoom,
    switchPanorama,
    loading,
    handleDotClick,
    onImageClick,
    direction
  };
};

export default usePanoramaViewer;
