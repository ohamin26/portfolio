import { ItemContainer, ItemContentWrapper, ItemTitle, ModalStyle } from './projectPageContentItem.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/rootReducer';
import { closeModal, openModal } from '../../../../redux/slice/modalSlice';
import Modal from 'react-modal';
import { ItemModalContent } from './itemModal/itemModalContent/itemModalContent';
import { itemData } from '../../../../utils/projectData';

interface ProjectPageContentItemProps {
  title: string;
}

export const ProjectPageContentItem = ({ title }: ProjectPageContentItemProps) => {
  const dispatch = useDispatch();
  const openModalState = useSelector((state: RootState) => state.modal.modalOpen);
  // modal 핸들러
  const openModalHandler = () => {
    openModalState ? dispatch(closeModal()) : dispatch(openModal(title));
  };
  return (
    <div className={ItemContainer}>
      <div className={ItemContentWrapper}>
        {itemData[title]?.imgSrc && (
          <img onClick={openModalHandler} className={itemData[title]?.imgClass} src={itemData[title]?.imgSrc} alt="" />
        )}
        {itemData[title]?.customComponent}
      </div>
      {itemData[title]?.titleText && (
        <span onClick={openModalHandler} className={ItemTitle}>
          {itemData[title]?.titleText}
        </span>
      )}
      <Modal
        ariaHideApp={false}
        isOpen={openModalState}
        onRequestClose={() => dispatch(closeModal())}
        style={{
          overlay: ModalStyle.overlay,
          content: ModalStyle.content,
        }}
      >
        <ItemModalContent />
      </Modal>
    </div>
  );
};
