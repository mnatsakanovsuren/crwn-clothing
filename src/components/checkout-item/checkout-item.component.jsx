import {useContext} from 'react';

import {CartContext} from '../../context/cart.context';

import {CheckoutItemContainer, ImageContainer, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name}/>
      </ImageContainer>
      <div className="name">{name}</div>
      <div className="quantity">
        <button className="arrow" onClick={removeItemHandler}>&#10094;</button>
        <div className="value">{quantity}</div>
        <button className="arrow" onClick={addItemHandler}>&#10095;</button>
      </div>
      <div className="price">{price}</div>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
};

export default CheckoutItem;