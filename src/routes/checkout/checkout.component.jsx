import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector';
import {setIsCartOpen} from '../../store/cart/cart.action';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutHeaderBlock,
  CheckoutTotalPrice,
  CheckoutContainer,
  CheckoutHeader
} from './checkout.styles';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  useEffect(() => {
    dispatch(setIsCartOpen(false));
  }, [dispatch])

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock >
          <span>
            Product
          </span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>
            Description
          </span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>
            Quantity
          </span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>
            Price
          </span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>
            Remove
          </span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      ))}
       <CheckoutTotalPrice>Total: {cartTotal}</CheckoutTotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;