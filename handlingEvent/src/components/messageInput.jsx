import styles from "./messageInput.module.css";


const MessageInput = () => {
  const inputValue = (event) => {
    return console.log(event.target.value);
  };

  return (
    <>
      <input
        className={styles.messageInput}
        type="text"
        placeholder="Enter Food items here"
        onChange={inputValue}
      />
   
    </>
  );
};

export default MessageInput;
