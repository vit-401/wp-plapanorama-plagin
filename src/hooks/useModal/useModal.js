import {useState, useCallback} from "react";
import styled from "styled-components";
import {Modal} from 'antd';
import styles from './styles.module.scss';
import lenta1 from '../../media/images/Plumbing/Delta 19802Z-BL-DST.jpg'
import Card from "./Card";
import {plumbing} from "../../data/data_options";

// Hook returning the modal JSX and control functions
export const useModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState([]);

    const openModal = (data) => {
        setModalData(data)
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false);
        setModalData([])

    }
    const ModalComponent = <Modal
        title={""}
        style={{top: 20}}
        width={'100%'}
        footer={null}

        open={modalVisible}
        onOk={closeModal} // Close on "Ok" button click
        onCancel={closeModal} // Close on background or "X" click
        destroyOnClose={true} // Ensures that modal content is removed from the DOM when closed
    >
        <div className={styles.modalWrap}>

            <div className={styles.title}>Available options</div>
            {modalData.map((item, index) => (

                <>
                    <div className={styles.categoryWrap}>
                        <div key={index} className={styles.category}>{item.category}</div>
                    </div>

                    <div className={styles.container}>

                        {
                            item.data.map((i, index) => (
                                <Card
                                    withBorder={(index % 3 !== 2 && index !== plumbing.length - 1)}
                                    index={index}
                                    key={index}
                                    title={i.title}
                                    description={i.description}
                                    image={i.image}
                                />
                            ))
                        }

                    </div>
                </>
            ))}

        </div>


    </Modal>;


    return {
        modalVisible,
        openModal,
        closeModal,
        Modal: ModalComponent, // Returning the JSX modal
    };
};

const ExtraInfo = styled.p`
    font-size: 12px;
    text-align: center;
    margin: 5px 25px 0px 0px;
`;
