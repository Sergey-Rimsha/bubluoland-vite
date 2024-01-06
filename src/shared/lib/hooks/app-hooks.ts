import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';

import { AppDispatch, RootState } from '@/app/store/root-store.ts';

export const useAppDispatch = (): ThunkDispatch<RootState, void, Action> =>
  useDispatch<ThunkDispatch<RootState, void, Action>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  // rejectValue: null | RejectValue;
}>();
