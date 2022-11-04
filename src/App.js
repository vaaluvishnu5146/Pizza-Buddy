import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./Pages/dashboard/todo";
import Form from "./Components/Form/Form";
import { addTodo } from "./Redux/slice/task.slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [task, setTask] = useState(null);
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  const dispatcher = useDispatch();

  const handleInputChange = (e) => {
    if (e) {
      setTask(e.target.value);
    }
  };

  const handlesave = (e) => {
    if (e && task) {
      dispatcher(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1
        style={{
          margin: "0 0 20px 0",
        }}
      >
        My tasks ({tasks.length})
      </h1>
      <Form
        task={task}
        tasks={tasks}
        handleInputChange={handleInputChange}
        handlesave={handlesave}
      />
    </div>
  );
}

export default App;
