import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from '../src/components/index';

const App = () => {
  return (
  <ProductCard
  product={{
    id: '1',
    title: "Product Card Example",
    // img: './img/img-example.jpg'
  }} 
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
