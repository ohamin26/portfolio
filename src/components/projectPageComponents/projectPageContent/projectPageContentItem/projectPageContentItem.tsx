import {
  ItemContainer,
  ItemContentWrapper,
  ItemImg,
  ItemImgDocuments,
  ItemImgOverdog,
  ItemTitle,
  ModalStyle,
} from './projectPageContentItem.css';
import { LuSchool } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/rootReducer';
import { closeModal, openModal } from '../../../../redux/slice/modalSlice';
import Modal from 'react-modal';
import { ItemModalContent } from './itemModal/itemModalContent/itemModalContent';

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
        {title === 'documents' && (
          <img onClick={openModalHandler} className={ItemImgDocuments} src="\assets\documents.png" alt="" />
        )}
        {title === 'overdog' && (
          <img onClick={openModalHandler} className={ItemImgOverdog} src="\assets\overdog.png" alt="" />
        )}
        {title === 'alwrite' && <img onClick={openModalHandler} className={ItemImg} src="\assets\alwrite.jpg" alt="" />}
        {title === 'cj' && <img onClick={openModalHandler} className={ItemImg} src="\assets\cj.png" alt="" />}
        {title === 'school' && <LuSchool onClick={openModalHandler} size={170} />}
      </div>
      {title === 'documents' && <span className={ItemTitle}>개인 포트폴리오 프로젝트</span>}
      {title === 'overdog' && <span className={ItemTitle}>반려동물 일상 공유 플랫폼</span>}
      {title === 'alwrite' && (
        <span className={ItemTitle}>
          다목적 필기 어플리케이션 <br />
          alwirte
        </span>
      )}
      {title === 'cj' && <span className={ItemTitle}>CJ 대한통운 미래기술 챌린지 2023</span>}
      {title === 'school' && <span className={ItemTitle}>중고서적 거래 플랫폼</span>}
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
