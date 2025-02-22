import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTask, TTaskState } from "../../types/shared";
const initialState: TTaskState = {
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<TTask>) => {
      state.tasks.push(payload);
    },
    editTask: (state, { payload }: PayloadAction<TTask>) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks[index] = payload;
    },
    deleteTask: (state, { payload }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
