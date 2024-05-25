import React, { useContext } from 'react'
import { itemContex } from '../store/ItemContex'

const CartItem = ({fruit}) => {
  const {addItem, removeItem} = useContext(itemContex);

  const addAmountHandler = () => {
    addItem({...fruit, amount: 1} )
  }

  const removeAmountHandler = () => {
    removeItem(fruit.id);
  }

  return (
    <div>
      <div className="card cart">
      <div>
        <p className="card-title">{fruit.name}</p>
        <p className="card-price">${fruit.price}</p>
      </div>
      <div className="card-right">
        <p className="card-quantity"><span>x{fruit.amount}</span></p>
        <div className="quantity-ctr">
            <button className='quantity-btn m-ctr' onClick={addAmountHandler}>+</button>
            <button className='quantity-btn' onClick={removeAmountHandler}>-</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItem;
