import PropTypes from "prop-types";
import styles from "./Button.module.css";
import React, { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };

  const onClickDelete = (index) => {
    setToDos((currentArray) => {
      const updatedArray = [...currentArray];
      updatedArray.splice(index, 1);
      return updatedArray;
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h1>To Do List({toDos.length})</h1>
          <input
            onChange={onChange}
            type="text"
            placeholder="Insert To Do"
            value={toDo}
          />
          <button>Add To Do</button>
        </div>
      </form>
      <ol>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onClickDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
