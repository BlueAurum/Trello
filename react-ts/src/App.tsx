import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ModalWin from "./components/modalWin/ModalWin";

const App: React.FC = () => {
  return (
    <div className="app">
      <ModalWin />
      <Header />
      <Home />
    </div>
  );
};

export default App;
