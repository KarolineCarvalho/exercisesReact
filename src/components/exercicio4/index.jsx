import { useState } from "react";

import "./index.css";

function Exercicio4() {
  const [clickedTimes, setClickedTimes] = useState(0);

  const clickHandle = () => {
    setClickedTimes((previous) => {
      return previous + 1;
    });
  };

  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 4</h1>
      <div className="content ex4__vertical">
        <p className="ex4__clickedTimesText">
          Button has been clicked: {clickedTimes} times
        </p>
        <button className="button" onClick={clickHandle}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Exercicio4;
