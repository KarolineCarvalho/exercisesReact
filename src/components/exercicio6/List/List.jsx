import "./index.css";
function List(props) {
  return (
    <div className="ex6__list">
      <h3 className="ex6__title">{props.title}</h3>
      {props.list.map((item) => (
        <li className="ex6__listItem">{item}</li>
      ))}
    </div>
  );
}

export default List;
