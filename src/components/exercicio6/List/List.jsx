function List(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.list.map((item) => (
        <li className="listItem">{item}</li>
      ))}
    </div>
  );
}

export default List;
