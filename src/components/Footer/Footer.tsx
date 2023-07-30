import React from "react";

import css from "./Footer.module.css";

import Image from "../../img/Group55.png";

const Footer = () => {
  return (
    <div className={css.block}>
      <div className={css.container}>
        <div className={css.container_brand}>
          <img src={Image} alt="brand" />
        </div>
        <div className={css.list}>
          <ul className={css.list_item}>
            <li className={css.list_b}>
              <b>Occasions</b>
            </li>
            <li>Occasions</li>
            <li>Working From Home</li>
            <li>Snack Time</li>
            <li>Breakfast</li>
            <li>Vegan Life</li>
            <li>Baking</li>
            <li>Gifts & Bundles</li>
            <li>Easy Cooking</li>
            <li>All Products</li>
          </ul>
          <ul className={css.list_item}>
            <li className={css.list_b}>
              <b>All Categories</b>
            </li>
            <li>Baking</li>
            <li>Breakfast</li>
            <li>Condiments</li>
            <li>Drinks</li>
            <li>Heat Things Up</li>
            <li>Meal Solutions</li>
            <li>Pantry Staples</li>
            <li>Simmer Sauces</li>
            <li>Snacks & Treats</li>
            <li>Spice Up Your Cooking</li>
            <li>Sweet Tooth</li>
            <li>Wine & Cheese</li>
            <li>All Products</li>
          </ul>
          <ul className={css.list_item}>
            <li className={css.list_b}>
              <b>Gifts & Bundles</b>
            </li>
            <li>Sweet Tooth Specia</li>
            <li>Discover Local</li>
            <li>Baking Box</li>
            <li>Spicy Heat Lover's Box</li>
            <li>Snacking Sensations</li>
          </ul>
          <ul className={css.list_item}>
            <li className={css.list_b}>
              <b>Our Brands</b>
            </li>
          </ul>
          <ul className={css.list_item}>
            <li className={css.list_b}>
              <b>About Us</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
