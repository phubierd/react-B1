import React, { Component } from 'react'
import OnTap125product from './OnTap125product';

export default class OnTap125 extends Component {
    dataProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ];

    state = {
        sanPhamChiTiet: {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    }

    detailProduct = (detailProd)=> {
        console.log(detailProd)
        this.setState({
            sanPhamChiTiet: detailProd
        })
    }


    renderSP = () => {
        return this.dataProduct.map((item, index) => {
           return <OnTap125product item={item}  detailProduct={this.detailProduct} key={index}/> 

        })
    }

    render() {

        let{ maSP, tenSP, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom, giaBan, hinhAnh }=this.state.sanPhamChiTiet;
        

        return (

        <div className="container">
            <h3 className="text-center">Danh Sach SP</h3>
            <div className="row">
                {this.renderSP()}
            </div>

            <div className="row">
                <div className="col-4">
                    <h3 className="text-center">{tenSP}</h3>
                    <img className="w-100" src={hinhAnh}></img>
                </div>
                <div className="col-8">
                    <h3 className="text-center">Thong Tin San Pham</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ten SP</th>
                                <th>{tenSP}</th>
                            </tr>
                            <tr>
                                <th>Man Hinh</th>
                                <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>He Dieu Hanh</th>
                                <th>{heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Truoc</th>
                                <th>{cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{cameraSau}</th>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <th>{ram}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{rom}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
