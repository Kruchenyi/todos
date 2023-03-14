import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLock,
  faLockOpen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const Todobuttons = ({ delTodo, lockTodo, item }) => {
  return (
    <div className="btn-wrap">
    
      <button onClick={() => lockTodo(item.id)} className="btn__todo">
        {item.status ? (
          <FontAwesomeIcon icon={faLock} />
        ) : (
          <FontAwesomeIcon icon={faLockOpen} />
        )}
      </button>

      <button onClick={() => delTodo(item.id)} className="btn__todo">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};
export default Todobuttons;
