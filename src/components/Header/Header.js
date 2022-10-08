import React, { useState } from "react";
// CSS
import "./Header.css";

// components
import NewExpense from "./NewExpense";
import Register from "./Register";

const Header = ({ itemList, setItemList }) => {
  const [registerExpense, setRegisterExpense] = useState(false);

  return (
    <header className="header-container">
      <h1>Lista de Gastos</h1>
      {!registerExpense && (
        <NewExpense setRegisterExpense={setRegisterExpense} />
      )}
      {registerExpense && <Register setItemList={setItemList} />}
    </header>
  );
};

export default Header;
