import React, { useState } from "react";
// css
import "./App.css";
// components
import Header from "./components/Header/Header";
import Expenses from "./components/ItemCard/Expenses";

const App = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="app">
      <Header itemList={itemList} setItemList={setItemList} />
      <Expenses itemList={itemList} />
    </div>
  );
};

export default App;
