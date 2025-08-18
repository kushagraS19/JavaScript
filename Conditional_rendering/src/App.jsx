import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Using if-else statement

  // let message = ["I", "Love", "You", "Mumma"];

  // if (message.length === 0) {
  //   return <h1>"Jii Bacha?"</h1>;
  // }

  // return (
  //   <>

  //     <ul>
  //       {message.map((item) => (
  //         <li>{item}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  //________________________________________________________________________________________________________

  // Using ternary operators

  let message = ["I", "Love", "You", "Mumma"];

  let emptyMsg = message.length === 0 ? <h3>Jii Bachaa?</h3> : null;

  return (
    <>
      {emptyMsg}
      <ul>
        {message.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
