import React, { useContext, useState } from "react";
import { itemContex } from "../store/ItemContex";

const Card = ({ fruit }) => {
  const { id, name, description, price } = fruit;
  const { addItem } = useContext(itemContex);
  const [currentAmount, setCurrentAmount] = useState(1);
  // change from string state to number state
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 15) {
      alert("Please enter an valid amount!!!");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };

  return (
    <div className="card">
      <div>
        <p className="card-title">{name}</p>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
      </div>
      <div className="card-right">
        <input
          type="number"
          className="card-input"
          min={1}
          max={15}
          value={currentAmount}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
          }}
        />
        <button className="card-btn" onClick={addToCartHandler}>
          + ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
