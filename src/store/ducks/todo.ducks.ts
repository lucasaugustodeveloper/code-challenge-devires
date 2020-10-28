/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { api as axios } from '../../services/api';

const INITIAL_STATE: any = {
  data: [],
};

const todoList = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    setTodos: (state, { payload }: PayloadAction<any | undefined>) => ({
      ...state,
      data: payload,
    }),
  },
});

export const { setTodos } = todoList.actions;

export default todoList.reducer;

export const getTodos = async (dispatch: Dispatch) => {
  const { data } = await axios.get<any>('/todos');
  dispatch(setTodos({ data }));
};

export const selectTodoState = (state: RootState) => state.todoList;
