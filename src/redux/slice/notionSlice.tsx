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

  const pageIds: { [key: string]: string } = {
    documents: '1155d73cee1381c79d8de5f0cf143f8d',
    overdog: 'OVERDOG-1155d73cee1381eea382caf6d1096975',
    alwrite: 'ALWRITE-1155d73cee1381819d46c42d8fe33175',
    cj: 'CJ-2023-1155d73cee138160b24ee27ea518f2fe',
    washhub: 'WashHub-1155d73cee1381d5b2b6fa001d0b87a5',
  };

  const pageId = typeof modal.title === 'string' ? pageIds[modal.title] || '' : '';
  if (!pageId) throw new Error('Invalid modal title');

  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`);
  const resJson = await response.json();

  return resJson;
});
