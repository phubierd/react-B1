import React, { Component } from 'react'
//ket noi component với redux store
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { item } = this.props;
        console.log('spClick',this.props)
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={item.hinhAnh} alt={item.tenSP} height={300} />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <p className="card-text">{(item.giaBan).toLocaleString()}</p>
                    <button className="btn btn-info" onClick={()=>{this.props.themGioHang(item)}}>Them Gio Hang</button>
                </div>
            </div>

        )
    }
}


//hàm sinh ra props là hàm xử lý để đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
    //dispatch giong ham setState
    return {
        themGioHang: (spClick) => {
            //action: la 1 object chứa dữ liệu gửi lên redux store
            console.log('spClick', spClick)

            const action = {
                type:'THEM_GIO_HANG',//thuộc tính bắt buộc của action
                spGioHang:{...spClick,soLuong:1}
            }
            //sử dụng hàm dispatch để gửi hàm dữ liệu lên redux
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux)