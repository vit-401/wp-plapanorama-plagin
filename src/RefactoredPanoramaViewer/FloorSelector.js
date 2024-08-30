import React from 'react';
import {Tooltip} from 'antd';
import styles from './styles.module.scss';

const FloorSelector = ({
                         floors,
                         activeFloor,
                         activeRoom,
                         onImageClick,
                         handleDotClick,
                         handleChangeSelect,
                         compassRotation,
                       }) => {
  console.log(compassRotation)

  return <>
    {floors.map(floor => (
      floor.value === activeFloor && (
        <React.Fragment key={floor.value}>
          <img onClick={onImageClick} src={floor.img} alt="plan" className={styles.planImage}/>
          {floor.dotPosition.map(item => (
            <Tooltip key={`${item.top}${item.left}`} placement="topLeft" title={item.hoverText}>
              <div
                style={{
                  top: `${item.top}px`,
                  left: `${item.left}px`,
                  border: '1px solid #fff',
                  backgroundColor: activeRoom === item.pointTo ? '#2e4643' : 'transparent',
                }}
                className={styles.dot} onClick={() => handleDotClick(item.pointTo)}
              >
                {/* Add compass or arrow here */}
                {
                  activeRoom === item.pointTo ? <div
                    // style={{
                    //   transform: `rotate(${compassRotation}deg)`,
                    //   transition: 'transform 0.3s ease',
                    // }}
                    style={{
                      transform: `rotate(${compassRotation}deg)`,
                      transition: 'transform 0.3s ease',
                      position: 'absolute',
                      top: '-25px', // Adjust based on compassIndicator height to center on dot
                      left: '-10px', // Adjust based on compassIndicator width to center on dot
                    }}
                    className={styles.compassIndicator}></div> : null
                }
              </div>
            </Tooltip>
          ))}
        </React.Fragment>
      )
    ))}
  </>
};

export default FloorSelector;
