import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard, { ProductImage } from '../../src/components'
import { product2 } from '../data/products';

describe('ProductImage', ()=>{
    test('show image without ProductCard component', ()=>{
        const wrapper = renderer.create(
            <ProductImage img="test.png"/>
        )
        expect( wrapper.toJSON ).toMatchSnapshot();
    });
    test('Show image in ProductCard component', ()=>{
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    ()=>(
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )
        let tree = wrapper.toJSON();
        console.log(tree)
    })
})