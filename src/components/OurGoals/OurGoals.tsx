import React from "react";

import css from "./OurGoals.module.css";

import Images from "../../img/blueberry.png";
import Vector from "../../img/v.png";

const OurGoals = () => {
  return (
    <div className={css.block}>
      <div className={css.block_sections}>
        <div>
          <p className={css.title}>
            <span className={css.title_span}>Who Makes</span> Your Food?
          </p>
        </div>
        <div>
          <p className={css.title_p}>
            Our mission is to help grow the local food ecosystem in BC and
            across
            <br />
            Canada. Why?
          </p>
        </div>
        <div>
          <ul className={css.item_list}>
            <li className={css.item_pages}>
              Because it connects us to the land we live on, and to the people
              <br />
              who live here.
            </li>
            <li className={css.item_pages}>
              Because it’s more meaningful to cook and eat something made <br />
              by a person nearby than by some distant corporation
            </li>
            <li className={css.item_pages}>
              Because good local food makes our corner of the world a better{" "}
              <br />
              place to live
            </li>
            <li className={css.item_pages}>Because it supports local jobs</li>
            <li className={css.item_pages}>
              Because it makes more sense for the environment
            </li>
          </ul>
        </div>
        <div>
          <ul className={css.item_img}>
            <li>
              <img
                src={Vector}
                alt="vector"
                width="5px"
                height="15px"
                className={css.image_vector}
              />
            </li>
            <li>
              <img
                src={Vector}
                alt="vector"
                width="5"
                height="5"
                className={css.image_vector}
              />
            </li>
            <li>
              <img
                src={Vector}
                alt="vector"
                width="5"
                height="5"
                className={css.image_vector}
              />
            </li>
            <li>
              <img
                src={Vector}
                alt="vector"
                width="5"
                height="5"
                className={css.image_vector}
              />
            </li>
            <li className={css.end}>
              <img
                src={Vector}
                alt="vector"
                width="5"
                height="5"
                className={css.image_vector}
              />
            </li>
          </ul>
        </div>
        <div className={css.btn_line}>
          <button className={css.btn}>Discover our Producers</button>
        </div>
        <div className={css.images}>
          <img src={Images} alt="blueberry" width="570" height="487" />
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
