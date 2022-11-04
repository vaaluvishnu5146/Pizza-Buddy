import React from "react";

export default function Form({
  task = "",
  tasks = [],
  handleInputChange = () => {},
  handlesave = () => {},
}) {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        maxWidth: "600px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 0 20px 0",
        }}
      >
        <input
          style={{
            width: 250,
            height: 50,
            paddingInline: 5,
          }}
          value={task}
          onChange={handleInputChange}
          placeholder="Enter your task here ( Eg. Cook )"
        />
        <button
          style={{
            width: 100,
            height: 50,
            background: "#000000",
            color: "#FFFFFF",
          }}
          onClick={handlesave}
        >
          Save
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul style={{ width: 200 }}>
          {tasks && tasks.length > 0 ? (
            tasks.map((d, i) => <li key={`tasks-${i}`}>{d}</li>)
          ) : (
            <p>No tasks to show</p>
          )}
        </ul>
      </div>
    </div>
  );
}
