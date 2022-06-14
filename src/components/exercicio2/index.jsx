import "./index.css";
function Exercicio2() {
  const onClickHandler = () => {
    alert("Clicked!");
  };
  return (
    <div>
      <h1 className="title">Exercicio2</h1>
      <button className="button" onClick={onClickHandler}>
        Click Me
      </button>
    </div>
  );
}

export default Exercicio2;
