import React from "react";

// import { Route, Routes } from "react-router-dom";

// import { Occasions } from "./components/Nav/pages/Occasions";
// import { AllCategories } from "./components/Nav/pages/AllCategories";
// import { GiftsBundles } from "./components/Nav/pages/GiftsBundles";
// import { OurBrands } from "./components/Nav/pages/OurBrands";
// import { AboutUs } from "./components/Nav/pages/AboutUs";
// import { NotfoundPages } from "./components/Nav/pages/NotfoundPages";

import "./App.css";
import { Container } from "./components/Container/Container";
import Title from "./components/Title/Title";
import ImagTell from "./components/ImagTell/ImagTell";
import DishMenu from "./components/DishMenu/DishMenu";
import About from "./components/About/About";
import OurGoals from "./components/OurGoals/OurGoals";
import Brand from "./components/Brand/Brand";
import WorkingHome from "./components/WorkingHome/WorkingHom";
import BlockImg from "./components/BlockImg/BlockImg";
import WeAreHere from "./components/WeAreHere/WeAreHere";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Title />
        <Container />

        <ImagTell />
        <DishMenu />
        <About />
        <OurGoals />
        <Brand />
        <WorkingHome />
        <BlockImg />
        <WeAreHere />
        <Footer />
      </div>
    </div>
  );
}

export default App;

//  <Routes>
//    <Route path="/" element={<Container />}>
//      <Route path="/occasions" element={<Occasions />} />
//      <Route path="/allCategories" element={<AllCategories />} />
//      <Route path="/giftsBundles" element={<GiftsBundles />} />
//      <Route path="/ourBrands" element={<OurBrands />} />
//      <Route path="/aboutUs" element={<AboutUs />} />
//      <Route path="*" element={<NotfoundPages />} />
//    </Route>
//  </Routes>;
