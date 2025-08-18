import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"


const TodoItems = ({ todoItems }) => {
  return (
    <div id={styles.elementContainer}>
      {todoItems.map((item) => (
        <TodoItem TodoName={item.name} Tododate={item.DueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
