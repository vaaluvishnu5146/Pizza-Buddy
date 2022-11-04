import React from "react";

export default function TodoList({ data = [] }) {
  return (
    <div>
      <ul>
        {data &&
          data.length > 0 &&
          data.map((d, i) => (
            <li key={i}>
              <div>
                <h3>{d.title}</h3>
                <p>{d.isComplete ? "Completed" : "In-Progress"}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
