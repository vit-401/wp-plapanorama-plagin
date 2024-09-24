import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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

    // Ensure boundingSphere is initialized
    if (!this.boundingSphere) {
      this.boundingSphere = new THREE.Sphere();
    }
  }

  toggleInfospotVisibility() {
    this.visible = true;
  }
}

const usePanoramaViewerOptimize = (containerRef, panoramas, infospotsData, setActiveFloor) => {
  const [reloadKey, setReloadKey] = useState(0);
  const viewerRef = useRef(null);
  const panoramasRef = useRef([]);
  const infospotRefs = useRef([]);
  const [activeRoom, setActiveRoom] = useState(0);
  const [loading, setLoading] = useState(true);

  // Use the custom cursor hook
  useCustomCursor(containerRef);

  // Memoize the switchPanorama function to prevent unnecessary re-renders
  const switchPanorama = useCallback((index) => {
    if (viewerRef.current && panoramasRef.current[index]) {
      setActiveRoom(index);
      viewerRef.current.setPanorama(panoramasRef.current[index]);
    }
  }, []);

  // Handle dot click directly using switchPanorama
  const handleDotClick = useCallback((pointTo) => {
    switchPanorama(pointTo);
  }, [switchPanorama]);

  // Optimize the onImageClick function
  const onImageClick = useCallback((event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Image clicked at: top: ${y}, left: ${x}`);
  }, []);

  // Define handleContainerClick at the top level
  const handleContainerClick = useCallback((e) => {
    const position = viewerRef.current?.getPosition();
    if (position) {
      console.log('Click position: ', [
        parseFloat(position.x),
        parseFloat(position.y),
        parseFloat(position.z),
      ]);
    }
  }, []);

  // Memoize data if necessary
  const memoizedPanoramas = useMemo(() => panoramas, [panoramas]);
  const memoizedInfospotsData = useMemo(() => infospotsData, [infospotsData]);

  useEffect(() => {
    if (viewerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      cameraFov: 60,
      viewIndicator: false,
      autoHideInfospot: false,
      indicatorSize: 1000,
      reverseDragging: true,
      controlButtons: ['fullscreen'],
      dwellTime: 150,
    });

    viewerRef.current = viewer;
    panoramasRef.current = memoizedPanoramas.map((p) => p.panorama);

    // Pre-create icons to avoid redundant processing
    const icons = {
      circleOutlined: createCircleWithBorder(),
      arrowUp: createArrowUp(1000),
      arrowDown: createArrowDown(1000),
      arrowLeft: createArrowLeft(1000),
      arrowRight: createArrowRight(1000),
    };

    memoizedInfospotsData.forEach((data, index) => {
      let icon = icons.circleOutlined;
      let scale = 500;

      if (data.arrowUp) {
        icon = icons.arrowUp;
        scale = 1000;
      } else if (data.arrowDown) {
        icon = icons.arrowDown;
        scale = 1000;
      } else if (data.arrowLeft) {
        icon = icons.arrowLeft;
        scale = 1000;
      } else if (data.arrowRight) {
        icon = icons.arrowRight;
        scale = 1000;
      }

      const infospot = new MyInfospot(scale, icon);
      infospot.position.set(...data.position);
      infospot.addHoverText(data.hoverText);
      // Force geometry computation
      infospot.geometry.computeBoundingSphere();

      infospot.addEventListener("click", () => {
        if (data.floor) setActiveFloor(data.floor);
        switchPanorama(data.pointTo);
      });
      infospotRefs.current[index] = infospot;
      memoizedPanoramas[data.panoramaIndex].panorama.add(infospot);
    });

    memoizedPanoramas.forEach((panorama) => {
      panorama.panorama.addEventListener("enter-fade-start", () => {
        viewer.tweenControlCenter(new THREE.Vector3(...(panorama.initialView || [-0, 5000, 0])), 0);
      });
      panorama.panorama.addEventListener('progress', () => {
        setLoading(true);
      });
      panorama.panorama.addEventListener('load', () => {
        setLoading(false);
      });
      viewer.add(panorama.panorama);
    });

    // Configure viewer controls
    viewer.OrbitControls.noZoom = true;
    viewer.OrbitControls.maxFov = 60;
    viewer.getControl().rotateSpeed *= -2;
    viewer.getControl().momentumScalingFactor = 0;
    viewer.getCamera().updateProjectionMatrix();


    containerRef.current.addEventListener("click", handleContainerClick);

    viewerRef.current = viewer;

    // Cleanup function to remove event listeners and dispose of resources
    return () => {
      // if (containerRef.current) {
      //   containerRef.current.removeEventListener("click", handleContainerClick);
      // }
      // if (viewerRef.current) {
      //   viewerRef.current.dispose();
      //   viewerRef.current = null;
      // }
      // panoramasRef.current = [];
      // infospotRefs.current = [];
    };
  }, [containerRef, reloadKey]);
  const reload = useCallback(() => {
    console.log("reload")
    setReloadKey((prevKey) => prevKey + 1);
  }, []);

  return {
    reload,
    viewerRef,
    panoramasRef,
    infospotRefs,
    activeRoom,
    switchPanorama,
    loading,
    handleDotClick,
    onImageClick,
  };
};

export default usePanoramaViewerOptimize;
