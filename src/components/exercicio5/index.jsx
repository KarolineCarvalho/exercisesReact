import "./index.css";
function Exercicio5() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div>
      <h1 className="title">Exercicio5</h1>
      <ul>
        {animals.map((animal) => (
          <li className="listItem">{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio5;
