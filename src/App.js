import React, { useEffect, createRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./Pages/dashboard/todo";
import Form from "./Components/Form/Form";
import { addTodo } from "./Redux/slice/task.slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const taskInputRef = createRef(null);
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  const dispatcher = useDispatch();

  useEffect(() => {
    console.log("Re-rendering");
  }, []);

  const handlesave = (e) => {
    console.log(taskInputRef.current.value);
    if (e) {
      dispatcher(addTodo(taskInputRef.current.value));
      // setTask("");
    }
  };

  return (
    <div className="App">
      <h1
        style={{
          margin: "0 0 20px 0",
        }}
        id="tasks-title"
      >
        My tasks ({tasks.length})
      </h1>
      <Form tasks={tasks} handlesave={handlesave} inputRef={taskInputRef} />
    </div>
  );
}

export default App;
