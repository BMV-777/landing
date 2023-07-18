import React from "react";

import css from "./DishMenu.module.css";

import Image1 from "../../img/cards1.png";
import Image2 from "../../img/cards2.png";
import Image3 from "../../img/cards3.png";
import Image4 from "../../img/cards4.png";

const DishMenu = () => {
  return (
    <div className={css.block}>
      <div className={css.block_card}>
        <div>
          <p className={css.title}>
            Latest <span className={css.title_color}>Offers</span>
          </p>
        </div>
        <div className={css.container_dishMenu}>
          <div className={css.list_block}>
            <img src={Image1} alt="pizza" />
            <div className={css.list_quantity}>
              <p>Pepperoni Pizza</p>
              <p>
                <span className={css.promotion}>$19.99</span>
                <span className={css.price}>$24.9</span>
              </p>
            </div>
            <button className={css.button}>Quick Shop</button>
          </div>
          <div className={css.list_block}>
            <img src={Image2} alt="blini" />
            <div className={css.list_quantity}>
              <p>Pepperoni Pizza</p>
              <p>
                <span className={css.promotion}>$35.99</span>
                <span className={css.price}>$44.99</span>
              </p>
            </div>
            <button className={css.button}>Quick Shop</button>
          </div>
          <div className={css.list_block}>
            <img src={Image3} alt="avocado" />
            <div className={css.list_quantity}>
              <p>Pepperoni Pizza</p>
              <p>
                <span className={css.promotion}>$17.99</span>
                <span className={css.price}>$20.99</span>
              </p>
            </div>
            <button className={css.button}>Quick Shop</button>
          </div>
          <div className={css.list_block}>
            <img src={Image4} alt="orang" />
            <div className={css.list_quantity}>
              <p>Pepperoni Pizza</p>
              <p>
                <span className={css.promotion}>$24.99</span>
                <span className={css.price}>$29.99</span>
              </p>
            </div>
            <button className={css.button}>Quick Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishMenu;
