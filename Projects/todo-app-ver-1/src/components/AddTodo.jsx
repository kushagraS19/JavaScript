import styles from "./AddTodo.module.css";

function AddTodo(onAdd) {
  return (
    <div className="container-text-center">
      <div className={`${styles.KsRow} row`}>
        <div className="col-6">
          <input type="text" placeholder="Enter To-Do Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.ksBtn} btn btn-success`}
            onClick={onAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
