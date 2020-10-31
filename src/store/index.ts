import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import reducers from './ducks';

const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof reducers>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
