import React from "react";

export default function TaskForm({
  handleChange = () => {},
  handleSubmit = () => {},
  task = "",
}) {
  return (
    <div className="form-container" id="task-form-container">
      <input
        className="form-input"
        id="task-form-input"
        name="task"
        onChange={handleChange}
        value={task}
      />
      <button
        className="form-submit"
        id="task-form-submit"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
}
