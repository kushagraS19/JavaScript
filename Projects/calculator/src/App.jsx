import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/buttonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const buttonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={buttonClick}></ButtonsContainer>
    </div>
  );
}
export default App;
