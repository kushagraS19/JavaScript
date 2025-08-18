import "bootstrap/dist/css/bootstrap.min.css";
import MessageList from "./components/message_list";
import EmptyMsg from "./components/emptyMsg";
import Heading from "./components/heading";
import "./App.css";
import Container from "./components/container";

function App() {
  let message = ["I", "Am", "Kushagra", "saini"];

  return (
    <>
    <Container>
      <Heading></Heading>
      <EmptyMsg empty={message}></EmptyMsg>
      <MessageList items={message}></MessageList>
    </Container>
    <Container>
      <p>Above message is from Kushagra himself.</p>
    </Container>
    </>
  );
}

export default App;
