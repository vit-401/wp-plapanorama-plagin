import React from 'react';
import {Tooltip} from 'antd';
import styles from './styles.module.scss';

const FloorSelector = ({floors, activeFloor, activeRoom, onImageClick, handleDotClick, direction}) => {

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDirection((prevDirection) => prevDirection + 5); // Для прикладу, зміна напрямку
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  return <>
    {floors.map(floor => (
      floor.value === activeFloor && (
        <React.Fragment key={floor.value}>
          <img onClick={onImageClick} src={floor.img} alt="plan" className={styles.planImage}/>
          {floor.dotPosition.map(item => (
            <React.Fragment key={item.pointTo + "_"}>
              <svg
                style={{
                  position: 'absolute',
                  top: `${item.top}px`,
                  left: `${item.left}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                width="40" height="40"
              >
                {activeRoom === item.pointTo ?
                  <polygon
                    points="20,22 28,36 12,36"
                    fill="#000"
                    style={{filter: 'blur(1.5px)'}}
                    transform={`rotate(${direction}, 20, 20)`}
                  />
                  : null}
                <Tooltip key={`${item.top}${item.left}`} placement="topLeft" title={item.hoverText}>
                  <circle
                    cursor={'pointer'}
                    onClick={() => handleDotClick(item.pointTo)}
                    cx="20"
                    cy="20"
                    r="5"
                    stroke="#fff"
                    strokeWidth="1"
                    fill={activeRoom === item.pointTo ? '#2e4643' : 'transparent'}
                  />
                </Tooltip>
              </svg>
            </React.Fragment>
          ))}
        </React.Fragment>
      )
    ))}
  </>
};

export default FloorSelector;
