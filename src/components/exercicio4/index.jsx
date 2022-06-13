import { useState } from "react";

function Exercicio4() {
  const [clickedTimes, setClickedTimes] = useState(0);

  const clickHandle = () => {
    setClickedTimes((previous) => {
      return previous + 1;
    });
  };

  return (
    <div>
      <h1 className="title">Exercicio4</h1>
      <div className="exerciseContainer">
        <p>Button has been clicked: {clickedTimes} times</p>
        <button onClick={clickHandle}>Click Me</button>
      </div>
    </div>
  );
}

export default Exercicio4;
