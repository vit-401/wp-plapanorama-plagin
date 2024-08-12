import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'antd';
import PanoramaViewer from "../RefactoredPanoramaViewer";
import styles from './styles.module.scss';

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const openPopupImage = document.getElementById('open-popup-image');
    if (openPopupImage) {
      openPopupImage.addEventListener('click', showModal);
    }

    return () => {
      if (openPopupImage) {
        openPopupImage.removeEventListener('click', showModal);
      }
    };
  }, []);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const onCancel = ()=>{
    setIsModalOpen(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/*<Modal onCancel={onCancel} footer={null} title="Example" className={styles.modal} width={1200} open={isModalOpen}>*/}
      {/*  <PanoramaViewer/>*/}
      {/*</Modal>*/}
      <Modal
        onCancel={onCancel}
        footer={null}
        title="Example"
        className={styles.modal}
        width={window.innerWidth < 768 ? '95%' : '80%'}
        style={{ maxWidth: '1200px' }}
        open={isModalOpen}
      >
        <PanoramaViewer/>
      </Modal>
    </>
  );
};
export default Popup;
// <PanoramaViewer/>
