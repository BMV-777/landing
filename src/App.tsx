import React from "react";

// import Header from "./components/Header/Header";
// import Naw from "./components/Nav/Naw";

import "./App.css";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Title />
        <Container />
      </div>

      {/* <Header />
      <Naw /> */}
    </div>
  );
}

export default App;
