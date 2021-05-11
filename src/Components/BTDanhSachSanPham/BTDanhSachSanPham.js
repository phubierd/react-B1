import React, { Component } from 'react'
import SanPham from './SanPham';

export default class BTDanhSachSanPham extends Component {

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

    // part2
    state = {
        SanPhamChiTiet: {
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
        } //state luôn có giá trị mắc định ban đầu.
    }



    renderSanPham = () => {
        return this.dataProduct.map((item, index) => {
            return <div className="col-4" key={index}>
                {/* truyền hàm setState là hàm xemChiTiet xuống component sản phẩm thông qua props */}
                <SanPham item={item} xemChiTiet={this.xemChiTiet} />
                {/* <div className="card text-white bg-primary">
                    <img className="card-img-top" src={item.hinhAnh} alt={item.tenSP} style={{ width: '100%', height: '30px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        {/* toLocaleString => 3 số 0 sẽ phẩy, giao diện UI 
                        <p className="card-text">{item.giaBan.toLocaleString()}</p>
                        <button type="button" className="btn btn-secondary" onClick={()=>{this.xemChiTiet(item)}}>Xem Chi Tiết</button>

                    </div>
                </div>*/}

            </div>
        })
    }

    // part3
    xemChiTiet = (sanPhamClick) => {
        console.log('sanPhamClick', sanPhamClick)
        //gọi setState giống hàm changeColor của bài chọn xe
        this.setState({
            SanPhamChiTiet: sanPhamClick
        })
    }

    render() {
        let { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.state.SanPhamChiTiet
        return (
            <div className="container">
                <h3>Danh Sách SP</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row pt-5">
                    <div className="col-4">
                        <h3 className="text-center">{tenSP}</h3>
                        <img src={hinhAnh} className="w-100" alt={tenSP} />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Thông tin sản phẩm</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tên Sản Phẩm</th>
                                    <th>{tenSP}</th>
                                </tr>
                                <tr>
                                    <th>Màn Hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ Điều Hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
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
