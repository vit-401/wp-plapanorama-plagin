import React from 'react';
import { Tooltip } from 'antd';
import styles from './styles.module.scss';

const FloorSelector = ({ floors, activeFloor, activeRoom, onImageClick, handleDotClick, handleChangeSelect }) => (
  <>
    {floors.map(floor => (
      floor.value === activeFloor && (
        <React.Fragment key={floor.value}>
          <img onClick={onImageClick} src={floor.img} alt="plan" className={styles.planImage} />
          {floor.dotPosition.map(item => (
            <Tooltip key={`${item.top}${item.left}`} placement="topLeft" title={item.hoverText}>
              <div
                style={{
                  top: `${item.top}px`,
                  left: `${item.left}px`,
                  backgroundColor: activeRoom === item.pointTo ? 'yellow' : 'red'
                }}
                className={styles.dot} onClick={() => handleDotClick(item.pointTo)}
              />
            </Tooltip>
          ))}
        </React.Fragment>
      )
    ))}
  </>
);

export default FloorSelector;
