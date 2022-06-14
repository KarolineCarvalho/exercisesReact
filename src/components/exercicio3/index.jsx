import Button from "./button";
import "./index.css";

function Exercicio3() {
  const buttonsName = ["Button 1", "Button 2", "Button 3"];
  return (
    <div>
      <h1 className="title">Exercicio3</h1>
      <div className="buttonContainer">
        {buttonsName.map((button) => (
          <Button key={Math.random()} buttonName={button} />
        ))}
      </div>
    </div>
  );
}

export default Exercicio3;
