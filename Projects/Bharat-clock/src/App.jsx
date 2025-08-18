import Heading from "./components/heading";
import Msg from "./components/message";
import CurrentTime from "./components/time";
import "bootstrap/dist/css/bootstrap.min.css"



function App(){
  return <center>
    <div className="heading-container"><Heading></Heading>
    <Msg></Msg>
    <CurrentTime></CurrentTime></div>
  </center>
}

export default App;