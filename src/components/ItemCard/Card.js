import React from "react";
// CSS
import "./Card.css";
// components
import ItemDate from "./ItemDate";

const Card = ({ itemList }) => {
  return (
    <div>
      {itemList.length > 0 &&
        itemList.map((item) => (
          <div className="card-container" key={item.id}>
            <div className="date-title">
              <ItemDate date={item.date} />
              <h4>{item.title}</h4>
            </div>
            <p>R$ {item.price}</p>
          </div>
        ))}
    </div>
  );
};

export default Card;
