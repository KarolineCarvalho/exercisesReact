function JokeCard(props) {
  return (
    <div>
      <h2>{props.question}</h2>
      <p>{props.answer}</p>
    </div>
  );
}

export default JokeCard;
