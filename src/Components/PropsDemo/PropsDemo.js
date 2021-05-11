import React, { Component } from 'react'
import Product from './Product'

export default class PropsDemo extends Component {
    render() {
        let object1={
            price:1000,
            id:1,
            title:'iphone',
            img:'https://picsum.photos/200'
        }
        let object2={
            price:2000,
            id:2,
            title:'iphone XS',
            img:'https://picsum.photos/300'
        }
        let object3={
            price:3000,
            id:3,
            title:'iphone XS  Max',
            img:'https://picsum.photos/200'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Product title="iphone" price="1000$" product={object1}/>
                    </div>
                    <div className="col-4">
                        <Product title="oppo" price="2000$" product={object2}/>
                    </div>
                    <div className="col-4">
                        <Product title="samsung" price="2000$" product={object3}/>
                    </div>
                </div>
            </div>

        )
    }
}
