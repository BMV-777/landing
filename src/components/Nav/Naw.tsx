import React from "react";

import { Link, Outlet } from "react-router-dom";

import css from "./Naw.module.css";

const Naw = () => {
  return (
    <>
      <nav className={css.container_naw}>
        <div className={css.list}>
          <Link to="/occasions" className={css.list_a}>
            Occasions
          </Link>
          <span className={css.list_span}>v</span>
        </div>
        <div className={css.list}>
          <Link to="/allCategories" className={css.list_a}>
            All Categories
          </Link>
          <span className={css.list_span}>v</span>
        </div>
        <div className={css.list}>
          <Link to="/giftsBundles" className={css.list_a}>
            Gifts & Bundles
          </Link>
          <span className={css.list_span}>v</span>
        </div>
        <div className={css.list}>
          <Link to="/ourBrands" className={css.list_a}>
            Our Brands
          </Link>
        </div>
        <div className={css.list}>
          <Link to="/aboutUs" className={css.list_a}>
            About Us
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export { Naw };
