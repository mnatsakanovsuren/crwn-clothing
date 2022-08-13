import {useDispatch, useSelector} from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../store/cart/cart.action';
import {selectCartItems} from '../../store/cart/cart.selector';

import {CheckoutItemContainer, ImageContainer, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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