import { useContext } from 'react';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import {CartContext} from '../../context/cart.context';

import {
  ProductCardContainer,
  ProductName,
  ProductFooter,
  ProductPrice
} from './product-card.styles';

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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