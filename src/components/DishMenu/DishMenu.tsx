import React from "react";

import Image1 from "../../img/cards1.png";
import Image2 from "../../img/cards2.png";
import Image3 from "../../img/cards3.png";
import Image4 from "../../img/cards4.png";

const DishMenu = () => {
  return (
    <div>
      <div>
        <p>
          Latest <span>Offers</span>
        </p>
      </div>
      <div>
        <div>
          <img src={Image1} alt="pizza" />
          <p>Pepperoni Pizza</p>
          <p>
            $19.99<span>$24.9</span>
          </p>
          <button>Quick Shop</button>
        </div>
        <div>
          <img src={Image2} alt="pizza" />
          <p>Pepperoni Pizza</p>
          <p>
            $19.99<span>$24.9</span>
          </p>
          <button>Quick Shop</button>
        </div>
        <div>
          <img src={Image3} alt="pizza" />
          <p>Pepperoni Pizza</p>
          <p>
            $19.99<span>$24.9</span>
          </p>
          <button>Quick Shop</button>
        </div>
        <div>
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
