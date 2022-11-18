import React, { useState } from "react";
import "./App.css";
import TaskForm from "./Components/Form/TaskForm";
import { addTask, deleteTask } from "./Redux/slice/task.slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { fetching = false, tasks = [] } = useSelector(
    (state) => state.tasksReducer
  );
  const dispatcher = useDispatch();
  // HELPS US TO SET THE INPUT TEXT
  const [task, setTask] = useState("");
  // HELPS US TO SAVE THE ALL TASKS
  const handleChange = (e) => {
    if (e) {
      setTask(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    if (e && task) {
      dispatcher(addTask(task));
      setTask("");
    }
  };

  const handleDelete = (data) => {
    if (data) {
      dispatcher(deleteTask(data));
    }
  };

  return (
    <div className="App task-form">
      <h1>Task management</h1>
      <p>Tasks({tasks.length || 0})</p>
      <TaskForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        task={task}
      />
      <div className="tasks-container" id="task-listing-container">
        <ul className="task-list">
          {tasks &&
            tasks.length > 0 &&
            tasks.map((d, i) => (
              <li key={`task-${i}`} className="task">
                <p>{d || "Title missing"}</p>
                <button onClick={() => handleDelete(d)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
