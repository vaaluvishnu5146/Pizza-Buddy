import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice/task.slice";

// ROOT REDUCER
export default configureStore({
  reducer: {
    tasksReducer: taskSlice,
  },
});
