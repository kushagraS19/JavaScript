import "bootstrap/dist/css/bootstrap.min.css";
import MessageList from "./components/message_list";
import EmptyMsg from "./components/emptyMsg";
import Heading from "./components/heading";

function App() {
  let message = ["I", "Am", "Kushagra", "saini"];
  

  return (
    <>
      <Heading></Heading>
      <EmptyMsg empty = {message}></EmptyMsg>
      <MessageList items = {message}></MessageList>
    </>
  );
}

export default App;
