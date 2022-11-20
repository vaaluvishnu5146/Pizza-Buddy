import React, { useEffect, createRef, useState } from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Todo from "./Pages/dashboard/todo";
// import Form from "./Components/Form/Form";
import { addTodo } from "./Redux/slice/task.slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatcher = useDispatch();
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  const [task, setTask] = useState("");

  const saveTask = (e) => {
    if (e) {
      dispatcher(addTodo(task));
      setTask("");
    }
  };

  const inputHandler = (e) => {
    if (e) {
      setTask(e.target.value);
    }
  };

  return (
    <div className="App">
      <h1>Tasks app</h1>
      <div className="tasks-container">
        <div className="tasks-form-container" id="tasks-form-container">
          <input
            className="text_input"
            id="task-input"
            placeholder="Enter task"
            type="text"
            onChange={inputHandler}
            value={task}
          />
          <button className="task-cta" id="task-submit" onClick={saveTask}>
            Save Task
          </button>
        </div>
        <div id="tasks-list">
          <ul>
            {tasks && tasks.map((d, i) => <li key={`task-list-${i}`}>{d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
