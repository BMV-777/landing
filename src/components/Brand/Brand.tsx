import React from "react";

import css from "./Brand.module.css";
import Image from "../../img/logopage.png";
import Images from "../../img/brand.png";
const Brand = () => {
  return (
    <div className={css.block}>
      <div className={css.sections}>
        <div className={css.img_section}>
          <img src={Image} alt="logo" />
        </div>
        <div className={css.title}>
          <p>Our Charity Partner, City Bakery</p>
        </div>
        <div>
          <img
            src={Images}
            alt="brand"
            width="100"
            height="130"
            className={css.img}
          />
        </div>
        <div>
          <button className={css.btn}>Learn more about City Bakery</button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
