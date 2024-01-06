import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BooksState = {
  view: 'GRID' | 'LIST';
};

const initialState: BooksState = {
  view: 'GRID',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    changeView(state, action: PayloadAction<BooksState['view']>) {
      state.view = action.payload;
    },
  },
});

export const booksActions = booksSlice.actions;
