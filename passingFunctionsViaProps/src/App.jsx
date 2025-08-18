import "bootstrap/dist/css/bootstrap.min.css";
import MessageList from "./components/message_list";
import EmptyMsg from "./components/emptyMsg";
import Heading from "./components/heading";
import "./App.css";
import Container from "./components/container";
import MessageInput from "./components/messageInput";
import { useState } from "react";

function App() {
  let [message, setMessage] = useState([]);
  let [textToShow, setTextState] = useState();

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newMessage = event.target.value;
      event.target.value = "";
      let newItems = [...message, newMessage];
      setMessage(newItems);
      console.log(newMessage);
    }
  };

  return (
    <>
      <Container>
        <Heading></Heading>
        <MessageInput handleKeyDown={onKeyDown}></MessageInput>
        <EmptyMsg empty={message}></EmptyMsg>
        <MessageList items={message}></MessageList>
      </Container>
    </>
  );
}

export default App;
