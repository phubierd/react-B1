import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

//nhận giá trị propsSanPham (part4)
let {item} = this.props;

        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={item.hinhAnh} alt={item.tenSP} style={{ width: '100%', height: '350px' }} />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    {/* toLocaleString => 3 số 0 sẽ phẩy, giao diện UI */}
                    <p className="card-text">{item.giaBan.toLocaleString()}</p>
                    <button type="button" className="btn btn-secondary" onClick={() => {  //nhận hàm xemChiTiet (là hàm setState từ component cha) và gọi hàm mỗi khi người dùng click
                         this.props.xemChiTiet(item) }}>Xem Chi Tiết</button>

                    <button className="btn btn-warning ml-2 " onClick={()=> this.props.themGioHang(item)}>Thêm giỏ hàng</button>

                </div>
            </div>
       
        )
    }
}
