import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../reducers/rootReducer';
export const notionSlice = createSlice({
  name: 'notion',
  initialState: {
    notionPage: null,
    result: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncFetchNotionPage.pending, (state) => {
      state.result = 'loading';
    });
    builder.addCase(asyncFetchNotionPage.rejected, (state) => {
      state.result = 'failed';
    });
    builder.addCase(asyncFetchNotionPage.fulfilled, (state, action) => {
      state.result = 'success';
      state.notionPage = action.payload;
    });
  },
});

export const asyncFetchNotionPage = createAsyncThunk('notionSlice/asyncFetchNotionPage', async (_, { getState }) => {
  const { modal } = getState() as RootState;
  const pageId =
    modal.title === 'documents'
      ? 'b375f06cef3d4b80aef3dc7fd90f2e55?pvs=4'
      : modal.title === 'overdog'
        ? 'c5b4ccfadbc4456dae4be2e64ab5336b?pvs=4'
        : modal.title === 'alwrite'
          ? 'alwrite-1e082d5f67f94e57936fc58112181675?pvs=4'
          : modal.title === 'cj'
            ? 'CJ-2023-b9ced3be9d9e4fd9b4381081e03582bd?pvs=4'
            : '';
  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`);
  const resJson = await response.json();
  return resJson;
});
