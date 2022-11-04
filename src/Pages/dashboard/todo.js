import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../../Components/TodoForm/TodoForm";
import TodoList from "../../Components/TodoForm/TodoList";
import { addTodo, fetchTodos, postTodo } from "../../Redux/slice/todo.slice";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { state = "", todos = [] } = useSelector((state) => state.todoReducer);

  useEffect(() => {
    if (state === "idle") {
      try {
        const data = dispatch(fetchTodos());
        data.then((d) => console.log(d));
        // setTodos(todos);
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  // useEffect(() => {
  //   try {
  //     if (todos.length > 0) {
  //       localStorage.setItem("todos", JSON.stringify(todos));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [todos]);

  const handleTodo = (e) => {
    // if (Boolean(todo)) {
    //   const newTodo = {
    //     title: todo,
    //     isComplete: false,
    //   };
    //   setTodo("");
    //   dispatch(addTodo(newTodo));
    // }
    dispatch(postTodo());
  };

  const handleInputChange = (e) => {
    if (e) {
      setTodo(e.target.value);
    }
  };

  return (
    <div>
      <TodoForm
        handleChange={handleInputChange}
        value={todo}
        handleSubmit={handleTodo}
      />
      <TodoList data={todos} />
    </div>
  );
}
