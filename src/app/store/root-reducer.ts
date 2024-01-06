import { combineReducers } from 'redux';

import { booksSlice } from '@/entities/books';

export const rootReducer = combineReducers({
  books: booksSlice.reducer,
});
