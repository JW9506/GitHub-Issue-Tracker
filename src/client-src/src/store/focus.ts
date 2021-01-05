import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FocusType = 'repositoryFocus' | 'issueFocus';

const initialState = {
  current: {} as Record<string, boolean>,
};

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    add({ current }, { payload }: PayloadAction<FocusType>) {
      current[payload] = true;
    },
    remove({ current }, { payload }: PayloadAction<FocusType>) {
      delete current[payload];
    },
  },
});

declare module 'react-redux' {
  interface DefaultRootState {
    focus: typeof initialState;
  }
}

export const { add, remove } = focusSlice.actions;
export default focusSlice.reducer;
