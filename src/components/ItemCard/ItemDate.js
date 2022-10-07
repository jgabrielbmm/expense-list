import React from "react";
import "./ItemDate.css";
const ItemDate = ({ date }) => {
  const dateFormat = date.split("-");
  const year = dateFormat[0];
  let month = dateFormat[1];
  const day = dateFormat[2];
  switch (month) {
    case "01":
      month = "Janeiro";
      break;
    case "02":
      month = "Fevereiro";
      break;
    case "03":
      month = "Março";
      break;
    case "04":
      month = "Abril";
      break;
    case "05":
      month = "Maio";
      break;
    case "06":
      month = "Junho";
      break;
    case "07":
      month = "Julho";
      break;
    case "08":
      month = "Agosto";
      break;
    case "09":
      month = "Setembto";
      break;
    case "10":
      month = "Outubro";
      break;
    case "11":
      month = "Novembro";
      break;
    case "12":
      month = "Dezembro";
      break;
    default:
      break;
  }
  return (
    <div className="date-container">
      <div className="Item-expense__day">{day}</div>
      <div className="Item-expense__month">{month}</div>
      <div className="Item-expense__year">{year}</div>
    </div>
  );
};

export default ItemDate;
