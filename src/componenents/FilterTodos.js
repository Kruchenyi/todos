import React from "react";

const FilterTodos = ({todoFiltered }) => {
 
  return (
    <div className="filter">
      <button className="filter__btn" onClick={() => todoFiltered("all")}>
        all
      </button>
      <button className="filter__btn" onClick={() => todoFiltered(true)}>
        open
      </button>
      <button className="filter__btn" onClick={() => todoFiltered(false)}>
        closed
      </button>
    </div>
  );
};
export default FilterTodos;
