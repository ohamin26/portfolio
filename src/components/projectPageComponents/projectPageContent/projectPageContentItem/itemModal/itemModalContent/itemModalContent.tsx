import { useEffect } from 'react';
import { ItemModalHeader } from '../itemModalHeader/itemModalHeader';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchNotionPage } from '../../../../../../redux/slice/notionSlice';
import { AppThunkDispatch, RootState } from '../../../../../../redux/reducers/rootReducer';
import { itemModalContentScrollbar } from './itemModalContent.css';
export const ItemModalContent = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  useEffect(() => {
    dispatch(asyncFetchNotionPage('documents'));
  }, [dispatch]);

  const response = useSelector((state: RootState) => state.notion.notionPage);

  return (
    <div className={itemModalContentScrollbar}>
      <ItemModalHeader />
      {response ? <NotionRenderer blockMap={response} /> : 'loading'}
    </div>
  );
};
