import React from "react";

import css from "./Menu.module.css";

// import Search from "../../img/search.png";
// import ProfileUser from "../../img/profileuser.png";
// import Crazing from "../../img/cartkorzina.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";

const Menu = () => {
  return (
    <div className={css.menu}>
      <BsSearch className={css.menu_list} />
      <AiOutlineUser className={css.menu_list} />
      <SlBasketLoaded className={css.menu_list} />
      {/* <img
        src={BsSearch}
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
      ></img> */}
    </div>
  );
};

export default Menu;

// BsSearch;
// AiOutlineUser;
// SlBasketLoaded;
