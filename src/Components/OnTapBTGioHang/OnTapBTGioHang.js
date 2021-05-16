import React, { Component } from 'react'
import DanhSachSPGioHang from './DanhSachSPGioHang';
import ModalGioHang from './ModalGioHang';

export default class OnTapBTGioHang extends Component {

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
        gioHang: [
            {
                "maSP": 3,
                "tenSP": "Iphone XS Max",
                "giaBan": 27000000,
                "hinhAnh": "./img/applephone.jpg",
                "soLuong":1

            }
        ]
    }

    render() {

        let tongSoLuong = this.state.gioHang.reduce((tongSoLuong,spGH,index)=>{
            return tongSoLuong+= spGH.soLuong;
        },0)

        return (
            <div className="container">
                <h3 className="text-center text-success">Bai Tap Gio Hang</h3>
                <ModalGioHang gioHang={this.state.gioHang}/>
                <div className="text-right"><span className="text-danger" style={{ cursor: 'pointer', fontSize: "17px", fontWeight: "bold" }} data-toggle="modal" data-target="#modelId">Gio Hang({tongSoLuong})</span></div>
                <DanhSachSPGioHang item={this.dataProduct} />
            </div>
        )
    }
}
