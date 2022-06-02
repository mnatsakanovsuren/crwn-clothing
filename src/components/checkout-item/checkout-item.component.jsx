import {useContext} from 'react';

import {CartContext} from '../../context/cart.context';

import './_checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <button className="arrow" onClick={removeItemHandler}>&#10094;</button>
        <div className="value">{quantity}</div>
        <button className="arrow" onClick={addItemHandler}>&#10095;</button>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
};

export default CheckoutItem;