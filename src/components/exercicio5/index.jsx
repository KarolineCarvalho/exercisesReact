import "./index.css";
function Exercicio5() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 5</h1>
      <div>
        <ul>
          {animals.map((animal) => (
            <li className="ex5__listItem ex5__text">{animal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exercicio5;
