import React, { Component } from 'react'

export default class GioHang extends Component {

    
// b4-p4
    renderGioHang = ()=>{
        let{gioHang} = this.props;
        //nhận props gioHang từ component cha {BTDanhSachSanPham} this.props.gioHang
        return gioHang.map((item,index)=>{
            return  <tr key={index}>
                <td>{item.maSP}</td>
                <td><img src={item.hinhAnh} width={50} height={50}></img></td>
                <td>{item.tenSP}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.tangGiamSoLuong(item.maSP,-1)
                    }}>-</button>
                    {item.soLuong}
                    <button className="btn btn-success"  onClick={()=>{
                        this.props.tangGiamSoLuong(item.maSP,1)
                    }}>+</button>
                </td>
                <td>{(item.giaBan.toLocaleString())}</td>
                <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={()=>{this.props.xoaSanPham(item.maSP)}}>Xóa</button></td>
            </tr> 
        })
    }

    // B4-p9:
    tinhTongSoLuong=()=>{
        let tongSL=0;
        for (let spGH of this.props.gioHang){
            tongSL+= spGH.soLuong;
        }
        return tongSL;
    }

    render() {
       
        return (
            <div className="container">
                <div className="text-right">
                   <i className="fa fa-cart-plus" />
                   {this.tinhTongSoLuong()}

                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Hình Ảnh</th>
                            <th>Ten SP</th>
                            <th>Số Lượng</th>
                            <th>Giá Bán</th>
                            <th>Tổng tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                        {/* <tr>
                            <td>1</td>
                            <td><img src="./img/applephone.jpg" width={50} height={50}></img></td>
                            <td>Iphone</td>
                            <td>
                                <button className="btn btn-success">-</button>
                                2
                                <button className="btn btn-success">+</button>
                            </td>
                            <td>1000</td>
                            <td>2000</td>
                            <td><button className="btn btn-danger">Xóa</button></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

