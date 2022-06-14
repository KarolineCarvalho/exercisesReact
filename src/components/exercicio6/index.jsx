import List from "./List/List";
import "./index.css";

function Exercicio6() {
  const domesticAnimals = ["🐶 dog", "🐱 cat", "🐹 hamster", "🐰 bunny"];
  const farmAnimals = ["🐮 cow", "🐷 pig", "🐴 horse", "🐔 chicken"];
  const wildAnimals = ["🦁 lion", "🐯 tiger", "🦊 fox", "🦝 racoon"];

  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 6</h1>
      <div className="ex6__content">
        <List list={domesticAnimals} title={"Domestic Animals"} />
        <List list={farmAnimals} title={"Farm Animals"} />
        <List list={wildAnimals} title={"Wid Animals"} />
      </div>
    </div>
  );
}

export default Exercicio6;
