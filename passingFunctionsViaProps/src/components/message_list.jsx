import Item from "./item";

const MessageList = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            message={item}
            onBuyButton 
            alertOnClickBuy={() => alert(`${item} is being bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default MessageList;
