import React from "react";

export default function TodoForm({
  handleChange = (e) => {},
  value = "",
  handleSubmit = (e) => {},
}) {
  return (
    <div id="todo-app-form">
      <input
        placeholder="Enter your task"
        id="todo-input"
        onChange={handleChange}
        value={value}
      />
      <button id="submit-todo" onClick={handleSubmit}>
        Add Todo
      </button>
    </div>
  );
}
