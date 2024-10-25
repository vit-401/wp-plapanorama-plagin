import {useState, useCallback} from "react";
import styled from "styled-components";
import {Modal} from 'antd';

const styles = {
    top: 20,
};

// Hook returning the modal JSX and control functions
export const useModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    console.log(modalVisible, " modal visible");
    const ModalComponent = <Modal
        // style={{ backgroundColor: '#f0f0f0' }}
        title={""}
        style={styles}
        width={'100%'}
        footer={null}
        open={modalVisible}
        onOk={closeModal} // Close on "Ok" button click
        onCancel={closeModal} // Close on background or "X" click
        destroyOnClose={true} // Ensures that modal content is removed from the DOM when closed
    >
        <ExtraInfo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor et illo officia possimus? Alias
            aspernatur corporis dolor dolores doloribus enim eos, esse est, hic, illum obcaecati reiciendis repudiandae
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet autem deleniti dolorum ducimus et eum
            excepturi fuga in, ipsa, itaque nesciunt officia quae repellat sint soluta tenetur voluptatum? Blanditiis
            dicta, dolor doloribus eligendi enim esse in iure provident quas veritatis. Animi architecto, at beatae,
            blanditiis consectetur cum cupiditate debitis delectus distinctio dolorem doloremque ea eius esse eum
            exercitationem expedita explicabo incidunt iure labore laudantium magnam maiores minus molestiae nam natus
            nulla numquam obcaecati odio praesentium quam quasi quis quisquam quo reiciendis repudiandae ut vitae.
            Adipisci amet aspernatur aut culpa, cum doloremque ducimus error esse fugit harum incidunt ipsa ipsum minus
            non porro quidem recusandae sapiente soluta. A accusantium ad alias animi aspernatur, at atque beatae cumque
            debitis dolor dolorum explicabo illo ipsa ipsum itaque nemo nesciunt nostrum, officia quas quia similique
            sit tempora unde veniam voluptate. Accusantium asperiores aspernatur consequatur debitis, delectus dolor
            dolores est eum ex hic ipsam ipsum iusto laboriosam libero nostrum officia quae quibusdam ratione reiciendis
            rerum sed tempora veniam! Accusantium fugit illo incidunt nisi perferendis porro quasi quos ratione sint
            voluptatem? Alias aliquam aliquid assumenda consectetur corporis delectus dicta, dolorum ea est excepturi
            exercitationem facilis fugit harum minima minus mollitia non numquam odio pariatur placeat quia quo rem
            repudiandae sapiente similique sit veritatis vero voluptate voluptatem voluptatum. At distinctio dolor eum
            ipsa ipsam labore omnis reiciendis repellat sequi voluptatem. Animi consectetur consequuntur delectus
            doloremque eligendi error eum eveniet facilis harum hic ipsam iusto laboriosam laudantium mollitia odio odit
            officiis omnis optio quae quam recusandae repellat sequi sint suscipit, vel voluptas voluptatem. Accusantium
            beatae cupiditate dignissimos facere iure mollitia quo quod reprehenderit sapiente sequi tempore,
            voluptates? Autem consectetur consequuntur corporis dolorum, ducimus et facere incidunt laborum modi natus
            nulla numquam odio omnis porro quae tempora unde ut. Beatae cupiditate exercitationem fuga impedit ipsam
            iure laborum, magnam minima ratione saepe! Consequatur culpa deserunt dolorem, doloribus excepturi
            exercitationem, itaque laboriosam nemo nesciunt obcaecati odit porro quam suscipit temporibus vero.
            Accusantium ad deleniti esse ipsa ipsum molestiae quam recusandae ullam vero vitae. A autem deserunt error
            exercitationem laudantium nemo quisquam repellat tempore? Autem beatae blanditiis commodi dolorem doloremque
            dolorum error esse ex id in incidunt ipsum itaque libero maxime modi molestiae molestias nam numquam
            obcaecati pariatur quidem, quod ratione repellendus repudiandae rerum, sequi sunt! Consequatur distinctio
            dolorum explicabo inventore laboriosam, sed suscipit. Ab aliquam cumque doloribus dolorum eligendi est
            eveniet, excepturi exercitationem explicabo harum laborum maxime minus molestiae non, quos repellat sed sunt
            totam, vitae voluptatem! Autem dignissimos, eaque laborum magni molestias optio reiciendis sapiente. Ab
            delectus distinctio eveniet nam neque, perferendis quisquam repellendus similique. Ab aperiam assumenda
            beatae culpa cupiditate nesciunt pariatur rerum totam vel. Blanditiis consectetur dolore, ea error id illum
            nesciunt quod quos voluptates. Ad aperiam architecto autem beatae consequatur debitis dolores eaque earum
            esse et eveniet exercitationem illo ipsum iste magnam modi mollitia natus, nobis odit perspiciatis quibusdam
            recusandae reiciendis saepe ullam voluptatum? Aperiam corporis, eaque eius ex expedita explicabo laudantium
            quis quod rem voluptate. Accusamus est excepturi facere illo iure maiores nihil quo ratione ullam
            voluptates! Consequatur corporis dolor dolores eaque ipsum, iure nihil placeat porro rem sed! A beatae
            distinctio dolores, incidunt ipsa quaerat quidem reprehenderit tenetur voluptatem. Commodi cumque dolore
            necessitatibus numquam quisquam repellat sequi? Cum exercitationem fuga fugit nisi nobis, numquam quam
            recusandae! At dolores hic iure maiores repudiandae totam, veniam voluptates? Accusamus accusantium delectus
            dolore eveniet excepturi, facilis illo iste magnam necessitatibus odit officiis perferendis perspiciatis
            provident quibusdam quos rerum sequi sit voluptas voluptatem, voluptatibus? Aliquam aspernatur autem commodi
            cupiditate dolores, et excepturi hic impedit incidunt inventore iste laborum maiores minus necessitatibus
            nemo nobis obcaecati officia omnis optio perspiciatis, quae quam quia quidem ratione repellendus similique
            soluta ullam velit veniam voluptates. Ad aliquid architecto asperiores aspernatur at beatae commodi
            consectetur cum cumque debitis ex hic id iure laboriosam laborum laudantium necessitatibus nemo, nihil nisi
            non nostrum odit officia possimus praesentium quasi quia quibusdam ratione sed soluta totam unde ut vel
            veniam vitae voluptas voluptatem voluptatibus. Alias commodi corporis deserunt doloremque id, illo iusto,
            minus molestiae obcaecati qui quidem rem rerum sapiente? Architecto at consequatur culpa deleniti dolores
            eius esse est et ex impedit ipsa magni molestiae molestias neque officiis perspiciatis quam quibusdam quidem
            quis quod, recusandae reiciendis rem repellat repudiandae similique sint suscipit, vitae? A alias amet
            aperiam corporis cupiditate distinctio, dolor doloribus eaque esse eum explicabo illo illum iusto magni
            molestiae mollitia nemo officiis perferendis placeat provident quasi quis sunt tempora, voluptates
            voluptatum. Accusantium animi culpa cumque dolorem in iusto labore, libero modi molestiae omnis perferendis
            perspiciatis repellat sit unde vitae? Aliquid commodi dolore eligendi esse harum laudantium nulla
            perferendis, perspiciatis provident, quod ratione rerum sit ullam. Aut labore laudantium nam veniam?
            Aspernatur autem cum cumque cupiditate, distinctio eveniet fugiat fugit magnam natus neque nobis quas quis
            reprehenderit soluta veniam. Ad alias amet aspernatur in laudantium optio, praesentium rem repellat sapiente
            tenetur ut voluptatum. Aliquam aliquid distinctio in minima molestias, quos sit? Accusantium, error eum
            incidunt magnam quis saepe unde. Culpa deserunt dolor doloremque eveniet harum magnam molestias, nesciunt
            officia, perferendis qui quisquam saepe sit suscipit tempore tenetur vero voluptatum. Debitis iure
            praesentium soluta tenetur voluptas. Adipisci asperiores, aut corporis, cum dolor error eum excepturi
            inventore, labore laboriosam magni provident quia sapiente! A aperiam culpa cupiditate distinctio dolore
            dolores eligendi fugiat impedit ipsum laudantium nesciunt nihil non praesentium provident quaerat sed
            suscipit tempore, veritatis! Ducimus eum ipsum possimus tenetur! Aliquam architecto aut commodi culpa
            delectus deleniti dolorem dolorum enim, error est eveniet exercitationem illo in inventore iure libero
            molestias necessitatibus nobis officiis perferendis porro provident quae quaerat quidem quisquam quo quod
            quos ratione rem repellendus rerum sapiente unde vel. Alias animi aspernatur debitis deserunt eveniet
            excepturi facere incidunt ipsum, minus molestias, nihil nisi obcaecati placeat sequi totam voluptate
            voluptatem. Consequatur culpa deleniti dicta ducimus, ea earum eveniet ipsam iure laboriosam quis tempora
            tempore voluptates? Adipisci aliquid asperiores commodi culpa, cupiditate doloremque eaque facere, facilis
            iusto quas sit soluta tempora unde. Beatae delectus expedita fuga fugit iste itaque iure labore, mollitia
            obcaecati quae quisquam reprehenderit sapiente soluta sunt tenetur vero!</ExtraInfo>
    </Modal>


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
