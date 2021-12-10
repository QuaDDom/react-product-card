# React-product-card

This is a test package for deployment in NPM


### - By Jadom

## Example:
```ts
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'react-product-card';
```

```tsx
<ProductCard 
 product={ product }
 initialValues={{ count: 1 }}
>
    {
        ({reset, count, handleClick, isMaxCountReached})=> (
        <>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>
        </>
        )
    }
</ProductCard>
```
