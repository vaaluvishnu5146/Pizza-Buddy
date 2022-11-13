import React, { useEffect, createRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./Pages/dashboard/todo";
import Form from "./Components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "./Redux/slice/todo.slice";

function App() {
  const dispatcher = useDispatch();
  const [todo, setTodo] = useState("");
  const { todos } = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatcher(fetchTodos());

    return () => {};
  }, []);

  const handleTaskChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTasks = () => {
    if (todo != null && todo != undefined) {
      dispatcher(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter you task"
        id="task-input"
        value={todo}
        onChange={handleTaskChange}
      />
      <button className="submit-cta" onClick={handleTasks}>
        Add Task
      </button>

      <div id="task-view-container">
        <ul>
          {todos.length > 0 ? (
            todos.map((d, i) => <li key={i}>{d?.title || "No Title"}</li>)
          ) : (
            <p>No tasks for today</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
