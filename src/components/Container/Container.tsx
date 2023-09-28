import React from "react";
import css from "./Container.module.css";
import Header from "../Header/Header";
import { Naw } from "../Nav/Naw";
import Menu from "../Menu/Menu";

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
