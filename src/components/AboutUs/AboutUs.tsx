import React from "react";

import Images_1 from "../../img/teleskop.png";
import Images_2 from "../../img/hous.png";
import Images_3 from "../../img/hands.png";
import Images_4 from "../../img/ok.png";
import Images_5 from "../../img/heart.png";

import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={css.block}>
      <div className={css.block_cards}>
        <div className={css.title}>
          <p>
            Why Choose{" "}
            <span className={css.title_span}>the Premium Bakery Quality</span>
          </p>
        </div>
        <div className={css.block_menu}>
          <div className={css.block_list}>
            <img src={Images_1} alt="teleckop" width="48" height="48"></img>
            <p className={css.list_contents}>
              <b>
                Discover new <br /> flavours & people
              </b>
            </p>
            <p className={css.list_item}>
              Discover new tastes, flavours, snacks and recipes to make
              wonderful meals. Also find out where your food comes from and who
              makes it.
            </p>
          </div>
          <div className={css.block_list}>
            <img src={Images_2} alt="teleckop" width="48" height="48"></img>
            <p className={css.list_contents}>
              <b>
                Buy <br /> wholesale
              </b>
            </p>
            <p className={css.list_item}>
              We offer bulk formats, variety cases, and discovery boxes so you
              can save money on delicious foods by buying at wholesale prices.
            </p>
          </div>
          <div className={css.block_list}>
            <img src={Images_3} alt="teleckop" width="48" height="48"></img>
            <p className={css.list_contents}>
              <b>
                Support your <br /> community{" "}
              </b>
            </p>
            <p className={css.list_item}>
              By buying in bulk from local and Canadian producers you are
              helping grow our local food ecosystem, creating jobs, and
              supporting families and entrepreneurs in your community.
            </p>
          </div>
          <div className={css.block_list}>
            <img src={Images_4} alt="teleckop" width="48" height="48"></img>
            <p className={css.list_contents}>
              <b>
                Enjoy the best <br /> quality
              </b>
            </p>
            <p className={css.list_item}>
              We only offer great tasting, all natural foods that are better for
              you, and organic if possible.
            </p>
          </div>
          <div className={css.block_list}>
            <img src={Images_5} alt="teleckop" width="48" height="48"></img>
            <p className={css.list_contents}>
              <b>
                Enjoy Club Level <br /> Service
              </b>
            </p>
            <p className={css.list_item}>
              As a member of our club, we will make sure you are delighted with
              our service or we will make it right!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
