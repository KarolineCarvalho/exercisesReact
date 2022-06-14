import { useState } from "react";
import "./index.css";

function Exercicio7() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const greetMe = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}!`);
    console.log(firstName);
  };

  return (
    <div className="exerciseContainer">
      <h1 className="title">Exercício 7</h1>

      <form className="ex7__content" onSubmit={greetMe}>
        <input
          className="ex7__input"
          type="text"
          placeholder="First name"
          onChange={firstNameChangeHandler}
        />
        <input
          className="ex7__input"
          type="text"
          placeholder="Last name"
          onChange={lastNameChangeHandler}
        />
        <button className="button">Greet Me</button>
      </form>
    </div>
  );
}

export default Exercicio7;
