import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {Viewer} from 'panolens';
import {Select, Spin} from "antd";
import styles from './styles.module.scss';
import plan from '../media/plan.png';
import plan2 from '../media/plan.jpg';
import useAnimatedProgress from "../hooks/useAnimatedProgress";
import {LoadingOutlined} from '@ant-design/icons';
import FloorSelector from './FloorSelector';
import usePanoramaViewer from "../hooks/usePanoramaViewer";
import classNames from "classnames";

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
const rooms = {
  0: "BEDROOM 1",
  1: "HALLWAY",
  2: "BEDROOM 2"
};

const PanoramaViewer = () => {
  const containerRef = useRef(null);
  const {
    viewerRef,
    panoramasRef,
    infospotRefs,
    activeRoom,
    switchPanorama,
    loading,
    handleDotClick,
    onImageClick
  } = usePanoramaViewer(containerRef);

  const [activeFloor, setActiveFloor] = useState('second-floor');
  const [percent, resetInitValue] = useAnimatedProgress(40, 100);

  useEffect(() => {
    if (percent >= 100) {
      resetInitValue(70);
    }
  }, [percent]);

  const handleChangeSelect = (value) => {
    setActiveFloor(value);
  };

  return (
    <div className={styles.panoramaWrap}>
      {loading && (<Spin indicator={<LoadingOutlined style={{fontSize: 300}} spin/>} className={styles.spin}/>)}
      <div className={styles.imagesWrap}>
        <div className={styles.planContainer}>
          <div className={styles.imgSelectWrap}>
            <FloorSelector
              floors={floors}
              activeFloor={activeFloor}
              activeRoom={activeRoom}
              onImageClick={onImageClick}
              handleDotClick={handleDotClick}
              handleChangeSelect={handleChangeSelect}
            />
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
        <div className={styles.info} style={{top: '10px', right: '10%'}}>{rooms[activeRoom]}</div>
        <div id="panolens" className={classNames(styles.image, 'custom-cursor')} ref={containerRef}></div>

      </div>
    </div>
  );
};

export default PanoramaViewer;
