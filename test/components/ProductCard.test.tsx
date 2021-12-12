import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components'
import { product } from '../data/products'

const { act } = renderer 

describe('ProductCard', ()=>{
    test('Show component correctly', ()=>{
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    ()=>(
                        <p>Test</p>
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
    test('Increase counter', ()=>{
        const wrapper = renderer.create(
            <ProductCard>
                {
                    ({ count, handleClick })=>(
                        <>
                        <button onClick={()=> handleClick(-1)}>-</button>
                        <p>{ count }</p>
                        <button onClick={()=> handleClick(+1)}>+</button>
                        </>
                    )
                }
            </ProductCard>
        )
        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();

        act(()=>(tree as any).children[2].props.onClick())

        tree = wrapper.toJSON();

        expect( (tree as any).children[1].children[0] ).toBe('1');

    })
})