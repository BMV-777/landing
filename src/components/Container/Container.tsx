import React from "react";
import css from "./Container.module.css";
import Header from "../Header/Header";
import Naw from "../Nav/Naw";
import Menu from "../Menu/Menu";

// type Port = {
//  children: string
// }

const Container = () => {
  return (
    <div className={css.container}>
      <Header />
      <Naw />
      <Menu />
    </div>
  );
};

export default Container;
