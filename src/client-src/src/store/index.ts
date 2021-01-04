import { configureStore } from '@reduxjs/toolkit';
import { default as focusReducer } from './focus';

const reducer = {
  focus: focusReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
