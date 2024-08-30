import React, {useRef, useState} from 'react';
import * as THREE from 'three';
import {Viewer} from 'panolens';
import {Select, Spin} from "antd";
import styles from './styles.module.scss';
import {LoadingOutlined} from '@ant-design/icons';
import FloorSelector from './FloorSelector';
import usePanoramaViewer from "../hooks/usePanoramaViewer";
import classNames from "classnames";
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


const PanoramaViewer = (props) => {
  const [openGallery, setOpenGallery] = useState(false)
  const containerRef = useRef(null);

  const [activeFloor, setActiveFloor] = useState(props.options[0].value);
  const [hovered, setHovered] = useState(false);
  const {
    compassRotation,
    viewerRef,
    panoramasRef,
    infospotRefs,
    activeRoom,
    switchPanorama,
    loading,
    handleDotClick,
    onImageClick
  } = usePanoramaViewer(containerRef, props.panoramas, props.infospotsData, setActiveFloor);

  const handleChangeSelect = (value) => {
    console.log(value)
    const currentFloor = props.floors.find(floor => floor.value === value)
    switchPanorama(currentFloor.defaultPanorama)

    setActiveFloor(value);
  };
  console.log('activeFloor', activeFloor)


  const onOpenGallery = () => {
    setOpenGallery(true)
  }
  const onCloseGallery = () => {
    setOpenGallery(false)
  }
  console.log(loading, 'loading')
  return (
    <div className={styles.panoramaWrap}>
      {loading && (<Spin indicator={<LoadingOutlined style={{fontSize: 150}} spin/>} className={styles.spin}/>)}

      {/*<div className={styles.slickWrapper} style={{display: openGallery ? 'block': 'none'}} >*/}
      {/*<div className={styles.slickClose} onClick={onCloseGallery}>*/}
      {/*  <ArrowLeftOutlined />*/}
      {/*</div>*/}
      {/*<SlickSlider/>*/}
      {/*</div>*/}
      <div className={styles.imagesWrap}>
        <div className={styles.planContainer}>
          <div className={styles.imgSelectWrap}>
            <FloorSelector
              compassRotation={compassRotation}
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
        <div className={classNames(styles.info, styles.infoPlan)}>A-280 PLAN</div>

        <div className={classNames(styles.info, styles.infoRoom)}>{props.rooms[activeRoom]}</div>
        <div id="panolens" className={classNames(styles.image, 'custom-cursor')} ref={containerRef}></div>
      </div>

    </div>
  );
};

export default PanoramaViewer;
