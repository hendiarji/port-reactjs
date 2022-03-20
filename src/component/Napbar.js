function Napbar(props) {
  return (
    <div>
      <h1>{props.navHeading}</h1>
      <ul>
        <li>
          <a href="#">A</a>
        </li>
        <li>
          <a href="#">A</a>
        </li>
        <li>
          <a href="#">{props.navText}</a>
        </li>
      </ul>
    </div>
  );
}

export default Napbar;
