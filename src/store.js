import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/task/taskSlice"

const store = configureStore({
  reducer: {
    task: tasksReducer,
  },
});

export default store;