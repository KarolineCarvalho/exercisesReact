function Exercicio2() {
  const onClickHandler = () => {
    alert("Clicked!");
  };
  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 2</h1>
      <div className="content">
        <button className="button" onClick={onClickHandler}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Exercicio2;
