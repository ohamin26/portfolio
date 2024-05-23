import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { store } from '../store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
