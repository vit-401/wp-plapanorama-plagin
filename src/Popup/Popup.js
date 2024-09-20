import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'antd';
import PanoramaViewer from "../RefactoredPanoramaViewer";
import styles from './styles.module.scss';

const Popup = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const popupButton = document.getElementById(props.id);
    console.log(props.id)

    if (popupButton) {
      popupButton.addEventListener('click', showModal);
      popupButton.style.cursor = 'pointer'
    }

    return () => {
      if (popupButton) {
        popupButton.removeEventListener('click', showModal);
      }
    };
  }, []);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        onCancel={onCancel}
        footer={null}
        title={props.title}
        className={styles.modal}
        width={window.innerWidth < 768 ? '95%' : '80%'}
        style={{maxWidth: '1500px'}}
        open={isModalOpen}
      >
        <PanoramaViewer options={props.options} infospotsData={props.infospotsData} panoramas={props.panoramas}
                        rooms={props.rooms}
                        floors={props.floors}/>
      </Modal>
    </>
  );
};
export default Popup;
// <PanoramaViewer/>
