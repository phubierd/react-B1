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
            // {
            //     "maSP": 3,
            //     "tenSP": "Iphone XS Max",
            //     "giaBan": 27000000,
            //     "hinhAnh": "./img/applephone.jpg",
            //     "soLuong": 1

            // }
        ]
    }

    //lấy dữ liệu tại component OnTapBTGioHang
    themGioHang = (spChon) => {
        console.log(spChon)
        //b1: từ sp dc chọn tạo ra sp giỏ hàng
        let spGioHang = {
            "maSP": spChon.maSP,
            "tenSP": spChon.tenSP,
            "giaBan": spChon.giaBan,
            "hinhAnh": spChon.hinhAnh,
            "soLuong": 1,
        }
        //Part 3
        //kiem tra spChon cos trong gio hang ko?
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP)
        if (index !== -1) {
            //san pham duoc click co san trong this.state.gioHang
            console.log('index if', index)
            gioHangCapNhat[index].soLuong += 1;
            console.log('giohangindex', gioHangCapNhat[index])
        } else {
            //san pham duoc lcick chua co trong this.state.gioHang
            console.log('index else', index)
            gioHangCapNhat.push(spGioHang)
        }

        //set state de component render lai
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }

    //Part 4
    //đặt sự kiện xóa giỏ hàng
    xoaGioHang = (maSP) => {
        //tìm trong giỏ hafngh có sp chứa maSP dc click thi xóa
        // let gioHangCapNhat = [...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        // if (index !== -1){
        //     gioHangCapNhat.splice(index,1);
        // }
        // //cap nhat lai state gio hang va render giao dien
        // this.setState({
        //     gioHang:gioHangCapNhat
        // })

        let gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP)
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    //part 5
    tangGiamSoLuong =  (maSP, tangGiam) =>{
    //tăng giảm == true: tăng số lượng
    //giảm số luowjgn ( ko dc nhỏ hơn 1)
    let gioHangCapNhat = [...this.state.gioHang]
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
    if(tangGiam){
        gioHangCapNhat[index].soLuong+= 1;
    }else{
        if(gioHangCapNhat[index].soLuong>1){

            gioHangCapNhat[index].soLuong-=1;
        }
    }
    //render cập nhật lại giá trị và render lại giỏ hàng
    this.setState({
        gioHang: gioHangCapNhat
    })
}

render() {

    let tongSoLuong = this.state.gioHang.reduce((tongSoLuong, spGH, index) => {
        return tongSoLuong += spGH.soLuong;
    }, 0)

    return (
        <div className="container">
            <h3 className="text-center text-success">Bai Tap Gio Hang</h3>
            <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
            <div className="text-right"><span className="text-danger" style={{ cursor: 'pointer', fontSize: "17px", fontWeight: "bold" }} data-toggle="modal" data-target="#modelId">Gio Hang({tongSoLuong})</span></div>
            <DanhSachSPGioHang item={this.dataProduct} themGioHang={this.themGioHang} />
        </div>
    )
}
}
