import React, { Component } from 'react'

export default class DataBinding extends Component {
    //ngoài phương thức là các thuộc tính và phương thức khác

    sinhVien = {
        maSv: 'sv01',
        tenSV: 'PhuCT',
        hinhAnh: 'https://picsum.photos/200',
    }

    //phương thức
    renderProduct = () => {
        const product = {
            id: 1,
            name: 'Iphone',
            img: 'https://picsum.photos/200',
            price: 1000,
        }
        //binding phương thức với kết quả trả về của phương thức là 1 component hoặc chuỗi hoặc số hoặc nội dung html
        return (
        <div className="card text-white bg-dark w-25 ">
            <img className="card-img-top w-100" src={product.img} alt />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.price}</p>
            </div>
        </div>)
    }

    render() {
        //khai báo biến trong phương thức
        const title = "cybersoft";
        const imgSrc = "https://picsum.photos/200"
        return (
            <div>
                <h1>Databinding</h1>
                <p id="title">{title}</p>
                <img src={imgSrc} />
                <br />
                <div className="card text-white bg-dark w-25 ">
                    <img className="card-img-top" src={this.sinhVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.sinhVien.tenSV}</h4>
                        <p className="card-text">{this.sinhVien.maSv}</p>
                    </div>
                </div>
            {this.renderProduct()}
            </div>
        )
    }
}
