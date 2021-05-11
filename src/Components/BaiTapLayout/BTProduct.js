import React, { Component } from 'react'

export default class BTProduct extends Component {
    render() {
        //this.props là thuộc tính có sẵn của component và là thuộc tính ko thể gán lại = giá trị mới
        let{product} = this.props
        return (
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img className="card-img-top" src={product.hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">{product.tenSP}</h4>
                        {/* <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p> */}
                        <a href="#" className="btn btn-primary">{product.gia}</a>
                        <a href="#" className="btn btn-danger">Cart</a>
                    </div>
                </div>
            </div>


        )
    }
}
