import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewGrid,
  CategoryTitle
} from './category-preview.styles';

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle>
        <Link to={title}>{title}</Link>
      </CategoryTitle>
      <CategoryPreviewGrid>
        {products
          .filter((_, index) => index < 4)
          .map((product) => <ProductCard key={product.id} product={product} /> )
        }
      </CategoryPreviewGrid>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;