import React from "react";
// import "./style.css";
// import Img1 from "./component/gaben.png";

export const Jumbotron = () => {
  return (
    <div>
      <section class="jumbotron">
        <img src="./component/img/gaben.png" alt="gaben" />
        {/* <img src={Img1("./component/img/gaben.png")} /> */}
        <h1 class="display-4">Arga Hendiarji</h1>
        <p class="lead">Web Development | UI/UX</p>
      </section>
    </div>
  );
};

export default Jumbotron;
