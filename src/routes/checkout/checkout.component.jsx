import {useContext, useEffect} from 'react';

import {CartContext} from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutHeaderBlock,
  CheckoutTotalPrice,
  CheckoutContainer,
  CheckoutHeader
} from './checkout.styles';

const Checkout = () => {
  const {cartItems, setIsCartOpen, cartTotal} = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  })

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