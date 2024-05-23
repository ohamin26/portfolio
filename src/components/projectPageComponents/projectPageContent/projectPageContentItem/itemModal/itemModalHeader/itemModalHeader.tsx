import { SlClose } from 'react-icons/sl';
import { ItemContainer, ItemTitle } from './itemModalHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../../../redux/slice/modalSlice';
import { RootState } from '../../../../../../redux/reducers/rootReducer';

export const ItemModalHeader = () => {
  const modalTitle = useSelector((state: RootState) => state.modal.title);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  return (
    <div className={ItemContainer}>
      <span className={ItemTitle}>
        {modalTitle === 'documents' && '개인 포트폴리오 프로젝트'}
        {modalTitle === 'overdog' && '반려동물 일상 공유 플랫폼'}
        {modalTitle === 'alwrite' && '다목적 필기 어플리케이션 alwirte'}
        {modalTitle === 'cj' && 'CJ 대한통운 미래기술 챌린지 2023'}
        {modalTitle === 'school' && '중고서적 거래 플랫폼'}
      </span>
      <SlClose onClick={onClose} />
    </div>
  );
};
