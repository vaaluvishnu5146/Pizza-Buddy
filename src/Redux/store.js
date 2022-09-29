import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from './slice/pizza.slice';
import cartSlice from './slice/cart.slice';

// ROOT REDUCER
export default configureStore({
  reducer: {
    pizzaReducer: pizzaSlice,
    cartReducer: cartSlice,
  },
});