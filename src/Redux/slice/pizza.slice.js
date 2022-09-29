import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [
      {
          id: 1,
          name: 'Margherita',
          price: '299',
          uri: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550'
      },
      {
          id: 2,
          price: '299',
          name: 'Tandoori paneer',
          uri: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=550'
      },
      {
          id: 3,
          price: '299',
          name: 'Veggy supreme',
          uri: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=550'
      },
  ],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = pizzaSlice.actions

export default pizzaSlice.reducer