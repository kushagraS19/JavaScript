import styles from "./messageInput.module.css";


const MessageInput = ({handleKeyDown}) => {
  
  return (
    <>
      <input
        className={styles.messageInput}
        type="text"
        placeholder="Enter Food items here"
        onKeyDown={handleKeyDown}
      />
   
    </>
  );
};

export default MessageInput;
