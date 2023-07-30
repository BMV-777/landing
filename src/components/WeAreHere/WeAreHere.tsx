import React from "react";

import css from "./WeAreHere.module.css";

import Images from "../../img/polotno.png";

import { ImFacebook } from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

const WeAreHere = () => {
  return (
    <div className={css.block}>
      <div className={css.sections}>
        <div className={css.sections_image}>
          <img src={Images} alt="plot" height="260" width="1280" />
        </div>
        <div>
          <p className={css.title}>Tell a Friend</p>
        </div>
        <div className={css.block_list}>
          <ul className={css.list}>
            <li>
              <ImFacebook className={css.list_item} width="20" height="20" />
            </li>
            <li>
              <RiInstagramLine className={css.list_item} />
            </li>
            <li>
              <ImTwitter className={css.list_item} />
            </li>
            <li>
              <ImWhatsapp className={css.list_item} />
            </li>
            <li>
              <BsMessenger className={css.list_item} />
            </li>
            <li>
              <BiLogoTelegram className={css.list_item} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeAreHere;

// ImFacebook;
// ImInstagram;
// ImTwitter;
// ImWhatsapp;
// BsMessenger;
// ImTelegram;
