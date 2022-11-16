import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./components/Header";
import TouristinfoCard from "./components/TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
      <TouristinfoCard />
    </div>
  );
};

export default App;
