import React from "react";

import { Route, Routes } from "react-router-dom";

// import Header from "./components/Header/Header";
// import Naw from "./components/Nav/Naw";

import "./App.css";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import ImagTell from "./components/ImagTell/ImagTell";
import DishMenu from "./components/DishMenu/DishMenu";
import AboutUs from "./components/AboutUs/AboutUs";
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
        <AboutUs />
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
