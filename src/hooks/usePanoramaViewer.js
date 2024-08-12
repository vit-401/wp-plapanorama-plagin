import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Viewer, ImagePanorama, Infospot } from 'panolens';
import createCircleWithBorder from "../utils/createCircleWithBorder";
import useCustomCursor from './useCustomCursor';
import bedroom2 from '../media/bedroom2.png';
import coridor_stairs from '../media/coridor_stairs.png';
import bedroom1 from '../media/bedroom1.png';

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

const usePanoramaViewer = (containerRef) => {
  const viewerRef = useRef(null);
  const panoramasRef = useRef([]);
  const infospotRefs = useRef([]);

  const [activeRoom, setActiveRoom] = useState(0);
  const [loading, setLoading] = useState(true);

  // Use the custom cursor hook
  useCustomCursor(containerRef);

  const switchPanorama = (index) => {
    if (viewerRef.current && panoramasRef.current[index]) {
      setActiveRoom(index);
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

    const panoramas = [
      new ImagePanorama(bedroom2),
      new ImagePanorama(coridor_stairs),
      new ImagePanorama(bedroom1)
    ];
    panoramasRef.current = panoramas;

    const infospotsData = [
      { position: [-3944.75, -1092.23, -2867.28], pointTo: 1, panoramaIndex: 0, hoverText: 'HALLWAY' },
      { position: [-1671.56, -1820.95, -4336.10], pointTo: 0, panoramaIndex: 1, hoverText: 'BEDROOM 1' },
      { position: [-4598.75, -1927.29, -271.99], pointTo: 2, panoramaIndex: 1, hoverText: 'BEDROOM 2' },
      { position: [4779.88, -1274.36, -664.69], pointTo: 1, panoramaIndex: 2, hoverText: 'HALLWAY' },
    ];

    const circleOutlined = createCircleWithBorder();

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
        console.log('Click position: ', position);
      }
    });

    viewerRef.current = viewer;

  }, []);

  return { viewerRef, panoramasRef, infospotRefs, activeRoom, switchPanorama, loading, handleDotClick, onImageClick };
};

export default usePanoramaViewer;
