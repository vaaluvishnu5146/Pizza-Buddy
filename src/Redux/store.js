import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slice/pizza.slice";
import cartSlice from "./slice/cart.slice";
import todoSlice from "./slice/todo.slice";
import taskSlice from "./slice/task.slice";

// ROOT REDUCER
export default configureStore({
  reducer: {
    pizzaReducer: pizzaSlice,
    cartReducer: cartSlice,
    todoReducer: todoSlice,
    tasksReducer: taskSlice,
  },
});
