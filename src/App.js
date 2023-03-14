import TitleTodos from "./componenents/TitleTodos";
import FormTodo from "./componenents/FormTodo";
import { useEffect, useState } from "react";
import FilterTodos from "./componenents/FilterTodos";
import TodoLogic from "./componenents/TodoLogic";
function App() {
  const [text, settext] = useState([]);
  const [filtered, setfiltered] = useState(text);

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    settext(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(text));
    setfiltered(text);
  }, [text]);
  function todoFiltered(status) {
    if (status === "all") {
      setfiltered(text);
    } else {
      let newTodo = [...text].filter((item) => item.status === status);
      setfiltered(newTodo);
    }
  }
  return (
    <div className="wrap">
      <div className="block">
        <TitleTodos title="ToDo App" />
        <FormTodo text={text} settext={settext} />

        <FilterTodos todoFiltered={todoFiltered} />

        <TodoLogic filtered={filtered} text={text} settext={settext} />
      </div>
    </div>
  );
}

export default App;
