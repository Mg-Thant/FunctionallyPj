import React, { useContext } from "react";
import { itemContex } from "../store/ItemContex";

const Nav = (props) => {
  const { items } = useContext(itemContex);
  const totalCart = items.reduce((currentValue, item) =>{
    return currentValue + item.amount;
  },0);

  return (
    <nav className="nav">
      <h2>Shoppy</h2>
      <button onClick={props.showCartHandler}>
        Cart <span>({totalCart})</span>
      </button>
    </nav>
  );
};

export default Nav;
