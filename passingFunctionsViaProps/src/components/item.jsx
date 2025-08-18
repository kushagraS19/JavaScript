import styles from "./item.module.css";

const Item = ({message , alertOnClickBuy}) => {
  return (
    <>
      <li className={`${styles.ksItem} list-group-item `}>
        <span className={styles.ksSpan}>{message}</span>
        <button
          className={`${styles.button} btn btn-success`}
          onClick={alertOnClickBuy}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;  