import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from '../slice/modalSlice';
import { notionSlice } from '../slice/notionSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    notion: notionSlice.reducer,
  },
});
