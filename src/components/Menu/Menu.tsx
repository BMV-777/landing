import React from "react";

import css from "./Menu.module.css";

import Search from "../../img/search.png";
import ProfileUser from "../../img/profileuser.png";
import Crazing from "../../img/cartkorzina.png";

const Menu = () => {
  return (
    <div className={css.menu}>
      <img
        src={Search}
        alt="search"
        width="60"
        height="60"
        className="menu_list"
      ></img>
      <img
        src={ProfileUser}
        alt="profile"
        width="60"
        height="60"
        className="menu_list"
      ></img>
      <img
        src={Crazing}
        alt="crazing"
        width="61"
        height="60"
        className="menu_list"
      ></img>
    </div>
  );
};

export default Menu;
