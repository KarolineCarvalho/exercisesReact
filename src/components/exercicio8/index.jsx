import JokeCard from "./JokeCard/JokeCard";
import "./index.css";

function Exercicio8() {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 8</h1>
      <div className="ex8__content">
        {jokes.map((joke) => (
          <JokeCard
            key={joke.id}
            question={joke.setup}
            answer={joke.punchline}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercicio8;
