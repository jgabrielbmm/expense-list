import React, { useEffect, useState } from "react";
// CSS
import "./Card.css";
// components
import ItemDate from "./ItemDate";

const Card = ({ itemList, filteredYear }) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList([]);
    const filterList = () => {
      itemList.filter((item) => {
        const year = item.date.split("-")[0];
        return year === filteredYear
          ? setFilteredList((prevItem) => [...prevItem, item])
          : null;
      });
    };
    filterList();
  }, [filteredYear, itemList]);

  return (
    <div>
      {filteredList.length > 0 &&
        filteredList.map((item) => (
          <div className="card-container" key={item.id}>
            <div className="date-title">
              <ItemDate date={item.date} />
              <h4>{item.title}</h4>
            </div>
            <p>R$ {item.price}</p>
          </div>
        ))}
      {filteredList.length === 0 && (
        <p className="no-expense">Nenhum gasto encontrado</p>
      )}
    </div>
  );
};

export default Card;
