import List from "./List/List";
import "./index.css";

function Exercicio6() {
  const animalsList = [
    "🐶 dog",
    "🐱 cat",
    "🐔 chicken",
    "🐑 sheep",
    "🐮 cow",
    "🐴 horse",
  ];

  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 6</h1>
      <ul className="ex6__content">
        <List list={animalsList} />
      </ul>
    </div>
  );
}

export default Exercicio6;
