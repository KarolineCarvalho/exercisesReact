import Button from "./button";

function Exercicio3() {
  const buttonsName = ["Button 1", "Button 2", "Button 3"];
  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 3</h1>
      <div className="content">
        {buttonsName.map((button) => (
          <Button key={Math.random()} buttonName={button} />
        ))}
      </div>
    </div>
  );
}

export default Exercicio3;
