import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSinhVien extends Component {
    render() {
        console.log('this.props.mangSinhVien', this.props.mangSinhVien)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Email</th>
                        <th>SĐT</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.mangSinhVien.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.maSinhVien}</td>
                            <td>{item.tenSinhVien}</td>
                            <td>{item.email}</td>
                            <td>{item.soDienThoai}</td>
                            <td><button className="btn btn-danger" onClick={()=>{
                                // gửi dữ liệu lên redux
                                const action  = {
                                    type: 'XOA_SINH_VIEN',
                                    maSinhVien: item.maSinhVien
                                }
                                this.props.dispatch(action)
                            }}>Xoa</button>
                            <button className="btn btn-info ml-2" onClick={()=>{
                                const action={
                                    type: 'SUA_SINH_VIEN',
                                    sinhVien: item
                                }
                                this.props.dispatch(action)
                            }}>Edit</button></td>
                            
                        </tr>
                    })}
                </tbody>

            </table>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangSinhVien: rootReducer.quanLySinhVienReducer.mangSinhVien
    }
}



export default connect(mapStateToProps)(TableSinhVien)