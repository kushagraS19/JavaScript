import styles from "./item.module.css";

const Item = (props) => {
  return (
    <>
      <li className={`${styles.ksItem} list-group-item`}>
        <span className={styles.ksSpan}>{props.message}</span>
      </li>
    </>
  );
};

export default Item;
