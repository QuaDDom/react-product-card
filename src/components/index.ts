import  ProductCard from './ProductCard';
import  ProductButtons  from './ProductButtons';
import  ProductImage  from './ProductImage';
import  ProductTitle  from './ProductTitle';

export {ProductCard, ProductButtons, ProductImage, ProductTitle }


export const ProductCardObj = Object.assign( ProductCard, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;