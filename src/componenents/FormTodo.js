import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FormTodo = ({ text, settext }) => {
  const [value, setvalue] = useState("");

  const changeTodo = (e) => {
    setvalue(e.target.value);
  };
  const submitValue = () => {
    const newTodo = [...text, { id: uuidv4(), title: value, status: true }];
    if (value.trim().length > 1) {
      settext(newTodo);
    }
    setvalue("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="block__form">
      <input
        placeholder="Enter todos"
        className="block__input"
        value={value}
        onChange={(e) => changeTodo(e)}
      />
      <button onClick={submitValue} className="block__button">
        +
      </button>
    </form>
  );
};
export default FormTodo;
