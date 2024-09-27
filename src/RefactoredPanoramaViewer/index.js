import React, { useRef, useState} from 'react';
import * as THREE from 'three';
import {Viewer} from 'panolens';
import {Button, Select, Spin} from "antd";
import styles from './styles.module.scss';
import {LoadingOutlined} from '@ant-design/icons';
import FloorSelector from './FloorSelector';
import classNames from "classnames";
import {mapFloorsToSelectOptions} from "../utils/mapFloorsToSelectOptions";
import usePanoramaViewer from "../hooks/usePanoramaViewer";


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
  const containerRef = useRef(null);

  const [activeFloor, setActiveFloor] = useState(props.options[0].value);
  const {
    viewerRef,
    panoramasRef,
    infospotRefs,
    direction,
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
              direction={direction}
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

        </div>
        <div className={classNames(styles.info, styles.infoRoom)}>{props.rooms[activeRoom]}</div>

        <div id="panolens" className={classNames(styles.image, 'custom-cursor')} ref={containerRef}></div>
      </div>

    </div>
  );
};

export default PanoramaViewer;
