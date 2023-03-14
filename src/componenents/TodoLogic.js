import React, { useState } from "react";

import Todobuttons from "./TodoButtons";

const TodoLogic = ({ filtered, text, settext }) => {
  const [edit, setedit] = useState(null);

  function delTodo(id) {
    let newTodo = [...text].filter((item) => item.id !== id);
    settext(newTodo);
  }
  function lockTodo(id) {
    let newTodo = [...text].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    settext(newTodo);
  }
  
  return (
    <div>
      {" "}
      {filtered.map((item) => {
        return (
          <div key={item.id} className="todo">
            {item.status ? (
              <div className="title">{item.title}</div>
            ) : (
              <div className="status">{item.title}</div>
            )}

            {edit ? (
              <div>
                <input value={item.title} />
                <button onClick={() => setedit(null)}>save</button>
              </div>
            ) : (
              <Todobuttons
                item={item}
                lockTodo={lockTodo}
                delTodo={delTodo}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default TodoLogic;
