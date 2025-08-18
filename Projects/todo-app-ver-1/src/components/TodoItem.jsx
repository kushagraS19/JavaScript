import styles from "./AddTodo.module.css"

function TodoItem({ TodoName, Tododate }) {
  return (
    <div className="container-text-center">
      <div className={`${styles.KsRow} row`}>
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{Tododate}</div>
        <div className="col-2">
          <button type="button" className={`${styles.ksBtn} btn btn-danger`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
