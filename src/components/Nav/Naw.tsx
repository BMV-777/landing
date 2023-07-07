import React from "react";

import css from "./Naw.module.css";

const Naw = () => {
  return (
    <>
      <nav className={css.container}>
        <div className={css.list}>
          <a href="/" className={css.list_a}>
            Occasions
          </a>
          <span className={css.list_span}>v</span>
        </div>
        <div className={css.list}>
          <a href="/" className={css.list_a}>
            All Categories
          </a>
          <span className={css.list_span}>v</span>
        </div>
        <div className={css.list}>
          <a href="/" className={css.list_a}>
            Gifts & Bundles
          </a>
          <span className={css.list_span}>v</span>
        </div>
        <div className={css.list}>
          <a href="/" className={css.list_a}>
            Our Brands
          </a>
        </div>
        <div className={css.list}>
          <a href="/" className={css.list_a}>
            About Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Naw;
