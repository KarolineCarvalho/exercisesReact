import "./index.css";
function List(props) {
  return (
    <>
      {props.list.map((item) => (
        <li className="ex6__listItem">{item}</li>
      ))}
    </>
  );
}

export default List;
