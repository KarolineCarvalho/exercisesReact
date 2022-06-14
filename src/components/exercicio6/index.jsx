import List from "./List/List";

function Exercicio6() {
  const domesticAnimals = ["🐶 dog", "🐱 cat", "🐹 hamster", "🐰 bunny"];
  const farmAnimals = ["🐮 cow", "🐷 pig", "🐴 horse", "🐔 chicken"];
  const wildAnimals = ["🦁 lion", "🐯 tiger", "🦊 fox", "🦝 racoon"];
  return (
    <div>
      <h1 className="title">Exercicio6</h1>
      <List list={domesticAnimals} title={"Domestic Animals"} />
      <List list={farmAnimals} title={"Farm Animals"} />
      <List list={wildAnimals} title={"Wid Animals"} />
    </div>
  );
}

export default Exercicio6;
