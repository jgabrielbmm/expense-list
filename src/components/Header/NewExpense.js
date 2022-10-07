import React from "react";

// CSS
import "./NewExpense.css";

const NewExpense = ({ setRegisterExpense }) => {
  return (
    <div className="NE-container">
      <h3 className="sub-title">Adicionar um novo gasto</h3>
      <button className="btn" onClick={() => setRegisterExpense(true)}>
        Clique aqui
      </button>
    </div>
  );
};

export default NewExpense;
