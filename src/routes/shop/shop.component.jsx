import {useContext} from 'react';
import {ProductsContext} from '../../context/products.context';

import ProductCardComponent from '../../components/product-card/product-card.component';

import './_shop.styles.scss';

const Shop = () => {
  const {products} = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;