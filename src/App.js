import React, { useState, createRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./Redux/slice/task.slice";

function App() {
  const dispatcher = useDispatch();
  const [task, setTask] = useState("");
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  const handleInputChange = (e) => {
    if (e) {
      setTask(e.target.value);
    }
  };
  const handleTasks = (e) => {
    if (e && task) {
      dispatcher(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1 style={{ margin: "0 0 50px 0" }}>Task management</h1>
      <h4>Tasks({tasks.length})</h4>
      <div id="task-management-form-container">
        <div id="task-management-form" style={{ margin: "0 0 20px 0" }}>
          <input
            className="input"
            placeholder="Enter your task"
            value={task}
            onChange={handleInputChange}
          />
          <button className="submit-cta" onClick={handleTasks}>
            Add Task
          </button>
        </div>
        <div id="task-list" style={{ width: 300, margin: "auto" }}>
          <ul>
            {tasks &&
              tasks.map((d, i) => (
                <li key={i} style={{ display: "flex" }}>
                  <p>{d}</p>
                  <button onClick={() => dispatcher(deleteTodo(d))}>x</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
