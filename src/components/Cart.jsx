import React, { useContext } from "react";
import CartItem from "./CartItem";
import { itemContex } from "../store/ItemContex";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContex);
  const totalPrice = `${totalAmount.toFixed(2)}`;

  return (
    <section className="cart-box">
      <h2>Your cart items are here</h2>
      <section className="overflow-ctr">
        {items.length < 1 ? (
          <h1 className="no-item">No item</h1>
        ) : (
          <>
            {items.map((fruit) => (
              <CartItem key={fruit.id} fruit={fruit} />
            ))}
          </>
        )}
      </section>
      <hr />
      <div className="total">
        <h3>Total Price</h3>
        <p>${totalPrice}</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <>
            <button className="order-btn" onClick={() => {
              alert("Ordered !!!")
            }}>Go to Order</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
