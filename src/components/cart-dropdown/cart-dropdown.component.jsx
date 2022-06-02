import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {CartContext} from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './_cart-dropdown.styles.scss';


const CartDropdown = () => {
  const [classActive, setClassActive] = useState('');
  const {cartItems, cartTotal} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('/checkout')

  useEffect(() => {
    setClassActive('active')
  }, []);

  return (
    <div className={`cart-dropdown-container ${classActive}`}>
      <div className="cart-items">
        {cartItems && cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/> )}
      </div>

      <div className="cart-dropdown-footer">
        <p className="total-price">Total: {cartTotal}</p>
        <Button onClick={goToCheckoutHandler} >
          GO TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;