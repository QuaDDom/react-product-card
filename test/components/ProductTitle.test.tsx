import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', ()=> {

    test('show component with custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom product title"/>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
    
    test('show product title', ()=>{
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    ()=>(
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })

})