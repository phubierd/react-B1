import React, { Component } from 'react'
//ket noi redux store
import { connect } from 'react-redux';



class BTGioHangRedux extends Component {
    render() {
        console.log('props', this.props)
        return (
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
                    {this.props.gioHang.map((spGioHang, index) => {
                        return <tr key={index}>
                            <td>{spGioHang.maSP}</td>
                            <td><img scr={spGioHang.hinhAnh} width={50} height={50} alt={spGioHang.tenSP} /></td>
                            <td>{spGioHang.tenSP}</td>
                            <td>
                                <button className="btn btn-info mr-2" onClick={()=>{
                                    this.props.tangGiamSoLuong(spGioHang.maSP,-1)
                                }}>-</button>
                                {spGioHang.soLuong}
                                <button className="btn btn-info ml-2" onClick={()=>{
                                    this.props.tangGiamSoLuong(spGioHang.maSP,1)
                                }}>+</button>
                            </td>
                            <td>{(spGioHang.giaBan.toLocaleString())}</td>
                            <td>{(spGioHang.soLuong * spGioHang.giaBan).toLocaleString()}</td>
                            <td><button className="btn btn-danger" onClick={() => { this.props.xoaGioHang(spGioHang.maSP) }}>XOA</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

//Đây là hàm lấy state từ redux (rootReducer)=> biến thành props của component
const mapStateToProps = (rootReducer) => {

    console.log("rootReducer", rootReducer);
    return {
        gioHang: rootReducer.stateGioHang,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log({ maSPClick })
            //Tao action đưa giá trị lên redux;
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick: maSPClick,
            }

            //dựa action lên store
            dispatch(action)
        },

        tangGiamSoLuong: (maSPClick, soLuong) => {
            // tao ra 1 action
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                soLuong: soLuong,
                maSPClick: maSPClick
            }
            //dùng hàm dispatch gửi giá trị lên redux
            dispatch(action)
        }


    }
}

//tao ra component moi co ket noi voi store tu component hien tai
// const GioHangConnectRedux = connect(mapStateToProps)(BTGioHangRedux);
// export default GioHangConnectRedux;
export default connect(mapStateToProps, mapDispatchToProps)(BTGioHangRedux);