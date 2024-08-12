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
      {top: 43, left: 90, pointTo: 2, hoverText: 'bedroom 2'},
      {top: 89, left: 110, pointTo: 3, hoverText: 'hallway 2'},
      {top: 82, left: 24, pointTo: 4, hoverText: 'hallway bathroom'},
      {top: 116, left: 110, pointTo: 5, hoverText: 'hallway bathroom'},
      {top: 125, left: 87, pointTo: 6, hoverText: 'laundry'},
      {top: 181, left: 110, pointTo: 7, hoverText: 'master bedroom view1'},
      {top: 187, left: 64, pointTo: 8, hoverText: 'master bedroom view2'},
      {top: 171, left: 45, pointTo: 9, hoverText: 'master bedroom view3'},
      {top: 133, left: 52, pointTo: 10, hoverText: 'master bedroom closed'},
      {top: 159, left: 19, pointTo: 11, hoverText: 'master bedroom bathroom'},
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
  2: "BEDROOM 2",
  3: "HALLWAY",
  4: "HALLWAY BATHROOM",
  5: "HALLWAY",
  6: "LAUNDRY",
  7: "MASTER BEDROOM",
  8: "MASTER BEDROOM",
  9: "MASTER BEDROOM",
  10: "MB CLOSED",
  11: "MB BATHROOM",
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
      {loading && (<Spin indicator={<LoadingOutlined style={{fontSize: 150}} spin/>} className={styles.spin}/>)}
      {/*<Spin indicator={<LoadingOutlined style={{fontSize: 150}} spin/>} className={styles.spin}/>*/}
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
        <div className={classNames(styles.info, styles.infoPlan)}>A-280 PLAN</div>
        <div className={classNames(styles.info, styles.infoRoom)}>{rooms[activeRoom]}</div>
        <div id="panolens" className={classNames(styles.image, 'custom-cursor')} ref={containerRef}></div>

      </div>
    </div>
  );
};

export default PanoramaViewer;
