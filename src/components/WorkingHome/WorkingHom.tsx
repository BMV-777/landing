import React from "react";

import css from "./WorkingHome.module.css";

import Image from "../../img/basket.png";

const WorkingHome = () => {
  return (
    <div className={css.block}>
      <div className={css.sections}>
        <div>
          <img src={Image} alt="basket" width="570" height="432" />
        </div>
        <div className={css.title}>
          <p>
            <span className={css.title_span}>Surprise Someone</span> <br />{" "}
            Working from Home
          </p>
        </div>
        <div className={css.list}>
          <p>
            Do you have a colleague or family member working hard at home? Our
            Working From Home box of snacks and drinks is the perfect way to put
            a smile on their face, delivered direct to their door.
          </p>
        </div>
        <div className={css.list_item}>
          <p>
            To buy for a large group of people, get in touch and we can discuss
            bespoke bundles and personalised messaging.
          </p>
        </div>
        <div>
          <button className={css.btn}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default WorkingHome;
