import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {Viewer} from 'panolens';
import {Button, Select, Spin} from "antd";
import styles from './styles.module.scss';
import {LoadingOutlined} from '@ant-design/icons';
import FloorSelector from './FloorSelector';
import classNames from "classnames";
import {mapFloorsToSelectOptions} from "../utils/mapFloorsToSelectOptions";
import usePanoramaViewerOptimize from "../hooks/usePanoramaViewerOptimize";
import usePanoramaViewer from "../hooks/usePanoramaViewer";
// import SlickSlider from "../SwiperSlider";


// Extend the Viewer prototype to include the getPosition method
Viewer.prototype.getPosition = function () {
  const intersects = this.raycaster.intersectObject(this.panorama, true);
  if (intersects.length > 0) {
    const point = intersects[0].point;
    const panoramaWorldPosition = this.panorama.getWorldPosition();
    return new THREE.Vector3(
      -(point.x - panoramaWorldPosition.x).toFixed(2),
      (point.y - panoramaWorldPosition.y).toFixed(2),
      (point.z - panoramaWorldPosition.z).toFixed(2)
    );
  }
  return null;
};


// const floors = [
//   {
//     value: 'second-floor',
//     title: 'Second floor',
//     img: plan,
//     dotPosition: [
//       {top: 43, left: 30, pointTo: 0, hoverText: 'bedroom 1'},
//       {top: 82, left: 64, pointTo: 1, hoverText: 'hallway'},
//       {top: 43, left: 90, pointTo: 2, hoverText: 'bedroom 2'},
//       {top: 89, left: 110, pointTo: 3, hoverText: 'hallway 2'},
//       {top: 82, left: 24, pointTo: 4, hoverText: 'hallway bathroom'},
//       {top: 116, left: 110, pointTo: 5, hoverText: 'hallway bathroom'},
//       {top: 125, left: 87, pointTo: 6, hoverText: 'laundry'},
//       {top: 181, left: 110, pointTo: 7, hoverText: 'master bedroom view1'},
//       {top: 187, left: 64, pointTo: 8, hoverText: 'master bedroom view2'},
//       {top: 171, left: 45, pointTo: 9, hoverText: 'master bedroom view3'},
//       {top: 133, left: 52, pointTo: 10, hoverText: 'master bedroom closed'},
//       {top: 159, left: 19, pointTo: 11, hoverText: 'master bedroom bathroom'},
//     ]
//   },
//   {
//     value: 'first-floor',
//     title: 'First floor',
//     img: plan2,
//     dotPosition: []
//   },
// ]
// const rooms = {
//   0: "BEDROOM 1",
//   1: "HALLWAY",
//   2: "BEDROOM 2",
//   3: "HALLWAY",
//   4: "HALLWAY BATHROOM",
//   5: "HALLWAY",
//   6: "LAUNDRY",
//   7: "MASTER BEDROOM",
//   8: "MASTER BEDROOM",
//   9: "MASTER BEDROOM",
//   10: "MB CLOSED",
//   11: "MB BATHROOM",
// };

const PanoramaViewer = (props) => {
  const [openGallery, setOpenGallery] = useState(false)
  const containerRef = useRef(null);

  const [activeFloor, setActiveFloor] = useState(props.options[0].value);
  // const [activeRoom, setActiveRoom] = useState(props.options[0].value);
  const [hovered, setHovered] = useState(false);
  const {
    viewerRef,
    panoramasRef,
    infospotRefs,
    activeRoom,
    switchPanorama,
    loading,
    handleDotClick,
    onImageClick,
  } = usePanoramaViewer(containerRef, props.panoramas, props.infospotsData, setActiveFloor);

  const handleChangeSelect = (value) => {
    const currentFloor = props.floors.find(floor => floor.value === value)
    switchPanorama(currentFloor.defaultPanorama)
    setActiveFloor(value);
  };
  const changeRoom = (value) => {
    handleDotClick(value)
  };



  console.log(loading, 'loading')
  return (
    <div className={styles.panoramaWrap}>
      {loading && (<Spin indicator={<LoadingOutlined style={{fontSize: 150}} spin/>} className={styles.spin}/>)}
      <div className={styles.descDropDown}>
        <div className={styles.lable}>Choose your location:</div>
        <Select
          value={activeRoom}
          style={{width: '100%', maxWidth: '200px'}}
          onChange={changeRoom}
          options={mapFloorsToSelectOptions(props.floors.find(f => activeFloor === f.value).dotPosition)}
          placeholder={"test2"}
        />
      </div>
      <div className={styles.wrapDropdown}>
        <div className={styles.selectInfoWrap}>
          <div className={styles.lable}>Choose your location:</div>
          <Select
            dropdownStyle={{width: 300}}
            value={activeRoom}
            style={{width: '100%', maxWidth: '137px'}}
            onChange={changeRoom}
            options={mapFloorsToSelectOptions(props.floors.find(f => activeFloor === f.value).dotPosition)}
            placeholder={"test2"}
          />
        </div>
        <div className={styles.selectInfoWrap}>
          <div className={styles.lable}>Choose your floor:</div>
          <Select
            dropdownStyle={{width: 300}}
            value={activeFloor}
            style={{width: '100%', maxWidth: '137px'}}
            onChange={handleChangeSelect}
            options={props.options}
            placeholder={"test21"}
          />
        </div>

      </div>
      <div className={styles.imagesWrap}>
        <div className={styles.planContainer}>
          <div className={styles.imgSelectWrap}>
            <FloorSelector
              floors={props.floors}
              activeFloor={activeFloor}
              activeRoom={activeRoom}
              onImageClick={onImageClick}
              handleDotClick={handleDotClick}
              handleChangeSelect={handleChangeSelect}
            />
            <Select
              value={activeFloor}
              className={styles.select}
              style={{width: '100%'}}
              onChange={handleChangeSelect}
              options={props.options}
            />
          </div>
          {/*<HomeOutlined onClick={onOpenGallery}*/}
          {/*              style={{*/}
          {/*                color: hovered ? '#fff' : '#000',*/}
          {/*                transition: 'color 0.1s ease-in-out',*/}
          {/*              }}*/}
          {/*              onMouseEnter={() => setHovered(true)}*/}
          {/*              onMouseLeave={() => setHovered(false)}*/}
          {/*              className={styles.galleryIcon}  alt=""/>*/}
          {/*<img onClick={onOpenGallery} className={styles.galleryIcon} src={galleryIcon} alt=""/>*/}
        </div>
        {/*<div className={classNames(styles.info, styles.infoPlan)}>A-280 PLAN</div>*/}

        <div className={classNames(styles.info, styles.infoRoom)}>{props.rooms[activeRoom]}</div>

        <div id="panolens" className={classNames(styles.image, 'custom-cursor')} ref={containerRef}></div>
      </div>

    </div>
  );
};

export default PanoramaViewer;
