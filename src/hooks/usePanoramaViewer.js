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


    panoramasRef.current = panoramas;



    infospotsData.forEach((data, index) => {
      let circleOutlinedIcon = createCircleWithBorder();
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
      panoramas[data.panoramaIndex].add(infospot);
    });

    panoramas.forEach((panorama) => {
      panorama.addEventListener("enter-fade-start", () => {
        viewer.tweenControlCenter(new THREE.Vector3(-3762.26, -1741.48, -2784.88), 0);
      });
      panorama.addEventListener('progress', () => {
        setLoading(true);
      });
      panorama.addEventListener('load', () => {
        setLoading(false);
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
        console.log('Click position: ', [parseFloat(position.x), parseFloat(position.y), parseFloat(position.z)]);
      }
    });

    viewerRef.current = viewer;

  }, []);

  return {viewerRef, panoramasRef, infospotRefs, activeRoom, switchPanorama, loading, handleDotClick, onImageClick};
};

export default usePanoramaViewer;
