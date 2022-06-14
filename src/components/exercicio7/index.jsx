import { useState } from "react";

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
    <div>
      <form onSubmit={greetMe}>
        <input
          type="text"
          placeholder="First name"
          onChange={firstNameChangeHandler}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={lastNameChangeHandler}
        />
        <button>Greet Me</button>
      </form>
    </div>
  );
}

export default Exercicio7;
