import React from "react";

import css from "./DishMenu.module.css";

import Image1 from "../../img/cards1.png";
import Image2 from "../../img/cards2.png";
import Image3 from "../../img/cards3.png";
import Image4 from "../../img/cards4.png";

const DishMenu = () => {
  return (
    <div className={css.block}>
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
              <span>$19.99</span>
              <span>$24.9</span>
            </p>
          </div>
          <button>Quick Shop</button>
        </div>
        <div className={css.list_block}>
          <img src={Image2} alt="pizza" />
          <p>Pepperoni Pizza</p>
          <p>
            $19.99<span>$24.9</span>
          </p>
          <button>Quick Shop</button>
        </div>
        <div className={css.list_block}>
          <img src={Image3} alt="pizza" />
          <p>Pepperoni Pizza</p>
          <p>
            $19.99<span>$24.9</span>
          </p>
          <button>Quick Shop</button>
        </div>
        <div></div>
        <div className={css.list_block}>
          <img src={Image4} alt="pizza" />
          <p>Pepperoni Pizza</p>
          <p>
            $19.99<span>$24.9</span>
          </p>
          <button>Quick Shop</button>
        </div>
      </div>
    </div>
  );
};

export default DishMenu;
