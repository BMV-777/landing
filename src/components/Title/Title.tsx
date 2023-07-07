import React from "react";

import css from "./Title.module.css";

const Title = () => {
  return (
    <>
      <div className={css.container}>
        <h3>Free Delivery over $100. Gift with Purchase over $150</h3>
        <div className={css.container_span}>
          <span>x</span>
        </div>
      </div>
    </>
  );
};

export default Title;
