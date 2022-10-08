import React, { useState } from "react";

// CSS
import "./Register.css";

const Register = ({ setItemList }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    const newItem = {
      id: id,
      title: title,
      price: price,
      date: date,
    };

    setItemList((prevExpenses) => {
      return [...prevExpenses, newItem];
    });
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form className="Register-container" onSubmit={submitHandler}>
      <label>
        <span>Título</span>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Valor</span>
        <input
          type="number"
          min="0.01"
          step="0.01"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        <span>Data</span>
        <input
          type="date"
          min="2021-01-01"
          max="2023-12-31"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button type="submit" className="btn">
        Registrar
      </button>
    </form>
  );
};

export default Register;
