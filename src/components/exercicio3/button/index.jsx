function Button(props) {
  const clickedButton = (e) => {
    const button = e.target.innerText;

    alert(`You clicked on ${button}`);
  };

  return <button onClick={clickedButton}>{props.buttonName}</button>;
}
export default Button;
