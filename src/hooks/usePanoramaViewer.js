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

// const infospotsData = [
//   {position: [-3944.75, -1092.23, -2867.28], pointTo: 1, panoramaIndex: 0, hoverText: 'HALLWAY'},
//   {position: [-1671.56, -1820.95, -4336.10], pointTo: 0, panoramaIndex: 1, hoverText: 'BEDROOM 1'},
//   {position: [-2836.86, -2040.29, 3563.51], pointTo: 3, panoramaIndex: 1, hoverText: 'HALLWAY 2'},
//   {position: [-2245.67, -1923.21, -4028.08], pointTo: 1, panoramaIndex: 3, hoverText: 'HALLWAY'},
//   {position: [-2008.23, -1053.31, -4451.25], pointTo: 4, panoramaIndex: 3, hoverText: 'HALLWAY BATHROOM'},
//   {position: [-4397.06, -2255.63, -719.76], pointTo: 1, panoramaIndex: 4, hoverText: 'HALLWAY '},
//   {position: [2754.37, -2278.29, -3488.25], pointTo: 4, panoramaIndex: 1, hoverText: 'HALLWAY BATHROOM'},
//   {position: [-4854.49, -1079.57, -473.11], pointTo: 3, panoramaIndex: 4, hoverText: 'HALLWAY 2'},
//   {position: [-4598.75, -1927.29, -271.99], pointTo: 2, panoramaIndex: 1, hoverText: 'BEDROOM 2'},
//   {position: [4779.88, -1274.36, -664.69], pointTo: 1, panoramaIndex: 2, hoverText: 'HALLWAY'},
//   {position: [3924.77, -2843.90, -1205.13], pointTo: 5, panoramaIndex: 3, hoverText: 'HALLWAY 3'},
//   {position: [4116.16, -2609.59, 1093.73], pointTo: 3, panoramaIndex: 5, hoverText: 'HALLWAY 2'},
//   {position: [-822.6, -3296.41, 3663.35], pointTo: 6, panoramaIndex: 5, hoverText: 'LAUNDRY'},
//   {position: [2279.53, -3006.44, -3272.88], pointTo: 5, panoramaIndex: 6, hoverText: 'HALLWAY 3'},
//   {position: [4605.93, -1286.28, -1439.86], pointTo: 7, panoramaIndex: 3, hoverText: 'MASTER BEDROOM VIEW1'},
//   {position: [-4679.95, -1702.50, -329.22], pointTo: 7, panoramaIndex: 5, hoverText: 'MASTER BEDROOM VIEW1'},
//   {position: [4652.86, -1017.83, -1508.94], pointTo: 3, panoramaIndex: 7, hoverText: 'HALLWAY 2'},
//   {position: [4570.24, -1397.33, -1452.25], pointTo: 5, panoramaIndex: 7, hoverText: 'HALLWAY 3'},
//   {position: [851.73, -1585.63, 4657.94], pointTo: 8, panoramaIndex: 7, hoverText: 'MASTER BEDROOM VIEW2'},
//   {position: [2557.85, -951.05, 4179.26], pointTo: 11, panoramaIndex: 7, hoverText: 'MASTER BEDROOM BATHROOM'},
//   {position: [-2601.3, -2376.44, -3541.58], pointTo: 7, panoramaIndex: 8, hoverText: 'MASTER BEDROOM VIEW1'},
//   {position: [4448.65, -2253.95, 262.58], pointTo: 9, panoramaIndex: 8, hoverText: 'MASTER BEDROOM VIEW3'},
//   {position: [4551.17, -1641.90, 1224.84], pointTo: 11, panoramaIndex: 8, hoverText: 'MASTER BEDROOM BATHROOM'},
//   {position: [4713.58, -1332.85, -978.00], pointTo: 10, panoramaIndex: 8, hoverText: 'MASTER BEDROOM CLOSED'},
//   {position: [-4350.37, -1041.30, -2211.49], pointTo: 7, panoramaIndex: 9, hoverText: 'MASTER BEDROOM VIEW1'},
//   {position: [-4506.57, -2150.25, 69.48], pointTo: 8, panoramaIndex: 9, hoverText: 'MASTER BEDROOM VIEW2'},
//   {position: [2183.78, -2574.50, -3683.49], pointTo: 10, panoramaIndex: 9, hoverText: 'MASTER BEDROOM CLOSED'},
//   {position: [2772.55, -3826.14, 1628.59], pointTo: 11, panoramaIndex: 9, hoverText: 'MASTER BEDROOM BATHROOM'},
//   {position: [535.55, -2828.41, -4079.73], pointTo: 9, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW3'},
//   {position: [98.89, -1575.87, -4738.74], pointTo: 8, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW2'},
//   {position: [2209.86, -1120.79, 4333.48], pointTo: 9, panoramaIndex: 7, hoverText: 'MASTER BEDROOM VIEW3'},
//   {position: [3007.7, -2284.48, -3272.55], pointTo: 9, panoramaIndex: 10, hoverText: 'MASTER BEDROOM VIEW3'},
// ];

// const panoramas = [
//   new ImagePanorama(bedroom2), //0
//   new ImagePanorama(hallway3), //1
//   new ImagePanorama(bedroom1), //2
//   new ImagePanorama(hallway1), //3
//   new ImagePanorama(hallwayBathroom), //4
//   new ImagePanorama(hallway2), //5
//   new ImagePanorama(laundry), //6
//   new ImagePanorama(MBView1), //7
//   new ImagePanorama(MBView2), //8
//   new ImagePanorama(MBView3), //9
//   new ImagePanorama(MBClosed), //10
//   new ImagePanorama(bathroomMR), //11
// ];
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
