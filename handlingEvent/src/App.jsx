import "bootstrap/dist/css/bootstrap.min.css";
import MessageList from "./components/message_list";
import EmptyMsg from "./components/emptyMsg";
import Heading from "./components/heading";
import "./App.css";
import Container from "./components/container";
import MessageInput from "./components/messageInput";

function App() {
  let message = ["Daal", "Green Vegetables", "Ghee", "Roti"];

  return (
    <>
    <Container>
      <Heading></Heading>
      <EmptyMsg empty={message}></EmptyMsg>
      <MessageInput></MessageInput>
      <MessageList items={message}></MessageList>
    </Container>
    {/* <Container>
      <p>Above message is from Kushagra himself.</p>
    </Container> */}
    </>
  );
}

export default App;
