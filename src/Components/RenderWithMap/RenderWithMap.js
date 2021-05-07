import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000 },
        { id: 2, name: 'Iphone X', price: 2000 },
        { id: 3, name: 'Iphone XS', price: 3000 },

    ]

    renderProduct = () => {

        // //cách 1
        // const arrTagJSX = [];

        // for (let i = 0; i < this.arrProduct.length; i++) {
        //     //mỗi lần duyệt lấy ra 1 object trong arrProduct
        //     let product = this.arrProduct[i];
        //     //từ dữ liệu product tạo ra tag jsx
        //     let tagJSX = <div className="col-4">
        //         <div className="card text-white bg-primary">
        //             <img className="card-img-top" src="https://picsum.photos" alt={123} />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>
        //     //đưa tagjsx vào mảng
        //     arrTagJSX.push(tagJSX)
        // }
        // return arrTagJSX;



        //cách 2:
        const arrTagJSX = this.arrProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="https://picsum.photos/200" alt={123} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })
        return arrTagJSX;
    }

    render() {
        return (
            <div className="container">
                <div className="text-center">Danh sách sản phẩm</div>
                <div className="row">
                    {/* khai báo qua mảng [] */}
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
