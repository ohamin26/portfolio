import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalOpen: false,
    title: null,
  },
  reducers: {
    openModal: (state, actions) => {
      state.modalOpen = true;
      state.title = actions.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
