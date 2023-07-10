import React from "react";

import css from "./ImagTell.module.css";
import Image from "../../img/Mask Grouposnov.png";

const ImagTell = () => {
  return (
    <div className={css.image_container}>
      <img src={Image} alt="fon" width="1280" height="500" />
      <h1 className={css.image_title}>Support Your Local Artisans</h1>
      <p className={css.image_page}>Discover brands and theit stories</p>
      <button className={css.image_button}>Browse bands</button>
    </div>
  );
};

export default ImagTell;
