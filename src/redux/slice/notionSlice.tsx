import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

export const asyncFetchNotionPage = createAsyncThunk('notionSlice/asyncFetchNotionPage', async (title: string) => {
  const pageId = title === 'documents' ? '2-64907e9bf0c14dce9ffe488a04ed33db?pvs=4' : '';
  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`);
  const resJson = await response.json();
  return resJson;
});
