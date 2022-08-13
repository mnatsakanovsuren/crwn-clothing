import {useDispatch, useSelector} from 'react-redux';

import {selectCartItems} from '../../store/cart/cart.selector';
import {addItemToCart} from '../../store/cart/cart.action';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductName,
  ProductFooter,
  ProductPrice
} from './product-card.styles';

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;