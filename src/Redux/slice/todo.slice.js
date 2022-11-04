import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todosURI = "https://jsonplaceholder.typicode.com/todos";
const postsURI = "https://jsonplaceholder.typicode.com/posts";
export const fetchTodos = createAsyncThunk("todos/fetchAllTodos", async () => {
  try {
    const response = await axios.get(todosURI);
    if (response.data.length > 0) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    return error.message;
  }
});

export const postTodo = createAsyncThunk("todos/postTodo", async () => {
  try {
    const response = await axios.post(postsURI, {
      userId: "12",
      id: "1",
      title: "Test Todo",
      body: "Test today body",
    });
    if (response) {
      return response.data;
    } else {
      return {};
    }
  } catch (error) {
    return error.message;
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    state: "idle",
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload.label) {
        state.todos.push(action.payload);
      }
    },
    deleteTodo: (state, action) => {
      console.log(action);
    },
  },
  extraReducers(builders) {
    builders.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "success";
      state.todos = state.todos.concat(action.payload);
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      console.log(action.error);
    });
    builders.addCase(postTodo.pending, (state, action) => {
      state.status = "loading";
    });
    builders.addCase(postTodo.fulfilled, (state, action) => {
      state.status = "success";
      console.log(action.payload);
    });
    builders.addCase(postTodo.rejected, (state, action) => {
      state.status = "failed";
      console.log(action.error);
    });
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
