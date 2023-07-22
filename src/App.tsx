import React from "react";

// import Header from "./components/Header/Header";
// import Naw from "./components/Nav/Naw";

import "./App.css";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import ImagTell from "./components/ImagTell/ImagTell";
import DishMenu from "./components/DishMenu/DishMenu";
import AboutUs from "./components/AboutUs/AboutUs";
import OurGoals from "./components/OurGoals/OurGoals";

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
      </div>

      {/* <Header />
      <Naw /> */}
    </div>
  );
}

export default App;
