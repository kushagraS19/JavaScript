import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import EmptyMsg from "./components/emptyMsg";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState(["by food"]);

  const handleAddButton = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onAdd={() => {handleAddButton()}} />
        <TodoItems todoItems={todoItems}></TodoItems>
        {todoItems.length === 0 && <EmptyMsg></EmptyMsg>}
      </center>
    </>
  );
}

export default App;
