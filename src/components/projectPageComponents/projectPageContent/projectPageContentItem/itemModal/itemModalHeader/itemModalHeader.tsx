import { SlClose } from 'react-icons/sl';
import { ItemContainer, ItemTitle } from './itemModalHeader.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../../../../redux/slice/modalSlice';

export const ItemModalHeader = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  return (
    <div className={ItemContainer}>
      <span className={ItemTitle}>프로젝트 이름 넣는 칸</span>
      <SlClose onClick={onClose} />
    </div>
  );
};
