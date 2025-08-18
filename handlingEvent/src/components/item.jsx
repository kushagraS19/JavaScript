import styles from "./item.module.css";

const Item = ({message}) => {
  return (
    <>
      <li className={`${styles.ksItem} list-group-item`}>
        <span className={styles.ksSpan}>{message}</span>
        <button
          className={`${styles.button} btn btn-success`}
          onClick={() => alert(`${message} is being bought`)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
