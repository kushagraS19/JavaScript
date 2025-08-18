import Item from "./item";

const MessageList = ({items}) => {
  
  return (
    <>
      <ul>
        {items.map((item) => (
          <Item key={item} message={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default MessageList;
