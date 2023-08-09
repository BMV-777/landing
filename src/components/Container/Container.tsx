import React from "react";
import css from "./Container.module.css";
import Header from "../Header/Header";
import { Naw } from "../Nav/Naw";
import Menu from "../Menu/Menu";

// import { Route, Routes } from "react-router-dom";

// import { Occasions } from "../Nav/pages/Occasions";
// import { AllCategories } from "../Nav/pages/AllCategories";
// import { GiftsBundles } from "../Nav/pages/GiftsBundles";
// import { OurBrands } from "../Nav/pages/OurBrands";
// import { AboutUs } from "../Nav/pages/AboutUs";
// import { NotfoundPages } from "../Nav/pages/NotfoundPages";

// type Port = {
//  children: string
// }

const Container = () => {
  return (
    <div className={css.container}>
      <Header />

      {/* <Routes>
        <Route path="" element={<Naw />}>
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/allCategories" element={<AllCategories />} />
          <Route path="/giftsBundles" element={<GiftsBundles />} />
          <Route path="/ourBrands" element={<OurBrands />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotfoundPages />} />
        </Route>
      </Routes> */}
      <Naw />
      <Menu />
    </div>
  );
};

export { Container };
