import "./index.css";

function JokeCard(props) {
  return (
    <div className="card__container">
      <h2 className="card__title">{props.question}</h2>
      <p className="card__text">{props.answer}</p>
    </div>
  );
}

export default JokeCard;
