import React from "react";

import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";

import css from "./BlockImg.module.css";
import Image1 from "../../img/img1.png";
import Image2 from "../../img/img2.png";
import Image3 from "../../img/img3.png";
import Image4 from "../../img/img4.png";
import Image5 from "../../img/img5.png";
// import Vector1 from "../../img/vector1.png";
import Vector2 from "../../img/vector2.png";

const BlockImg = () => {
  return (
    <div className={css.block}>
      <div className={css.sections}>
        <div className={css.title}>
          <p>
            <span className={css.title_span}>@PremiumBakeryQuality</span> on
            Instagram
          </p>
        </div>
        <div className={css.list}>
          <TbChevronLeft className={css.list_vector1} />
          <img
            src={Image1}
            alt="fruit"
            width="156"
            height="156"
            className={css.list_item}
          />
          <img
            src={Image2}
            alt="fruit"
            width="156"
            height="156"
            className={css.list_item}
          />
          <img
            src={Image3}
            alt="fruit"
            width="156"
            height="156"
            className={css.list_item}
          />
          <img
            src={Image4}
            alt="fruit"
            width="156"
            height="156"
            className={css.list_item}
          />
          <img
            src={Image5}
            alt="fruit"
            width="156"
            height="156"
            className={css.list_item}
          />
          <TbChevronRight className={css.list_vector2} />
        </div>
      </div>
    </div>
  );
};

export default BlockImg;

// TbChevronLeft
// import { IconName } from "react-icons/tb";
// TbChevronRight;
