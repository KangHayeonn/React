import React from "react";
import "./App.css";
import Header from "./components/js/Header";
import Footer from "./components/js/Footer";
import MainBoard from "./components/js/MainBoard";
import Shop from "./components/pages/Shop/Shop";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainBoard />
      <Footer />
      <Shop />
    </div>
  );
};

export default App;
