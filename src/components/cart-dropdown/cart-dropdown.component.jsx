import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {
  selectCartItems,
  selectCartTotal
} from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartDropdownFooter,
  TotalPrice
} from './cart-dropdown.styles';


const CartDropdown = () => {
  const [classActive, setClassActive] = useState('');
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('/checkout')

  useEffect(() => {
    setClassActive('active')
  }, []);

  return (
    <CartDropdownContainer classActive={classActive}>
      <CartItems>
        {
          cartItems.length ? (
            cartItems && cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/> )
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>

      <CartDropdownFooter>
        {cartItems.length ? <TotalPrice>Total: {cartTotal}</TotalPrice> : ''}
        <Button buttonType={BUTTON_TYPES_CLASSES.base} onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
      </CartDropdownFooter>
    </CartDropdownContainer>
  );
};

export default CartDropdown;