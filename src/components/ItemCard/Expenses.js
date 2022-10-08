import React, { useState } from "react";
// CSS
import "./Expenses.css";

// components
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ itemList }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  return (
    <div className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        setFilteredYear={setFilteredYear}
      />
      <Card itemList={itemList} filteredYear={filteredYear} />
    </div>
  );
};

export default Expenses;
