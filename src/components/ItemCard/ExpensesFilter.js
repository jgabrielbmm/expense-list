import React from "react";
// css
import "./ExpensesFilter.css";

const ExpensesFilter = ({ filteredYear, setFilteredYear }) => {
  return (
    <div className="filter">
      <select
        value={filteredYear}
        onChange={(e) => setFilteredYear(e.target.value)}
        id="selectedYear"
      >
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
