import React, { Component } from 'react'
import { connect } from 'react-redux'



class TableSV extends Component {

    renderSV = () => {
        return this.props.mangSV.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSinhVien}</td>
                <td>{item.tenSinhVien}</td>
                <td>{item.email}</td>
                <td>{item.soDienThoai}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    //gui data len redux
                    const action = {
                        type : 'XOA_SINH_VIEN',
                        maSinhVien:item.maSinhVien
                    }
                    this.props.dispatch(action)
                }}>Xoa</button></td>
                <td><button className="btn btn-info" onClick={()=>{
                    const action ={
                        type: 'SUA_SINH_VIEN',
                        sinhVien:item
                    }
                    this.props.dispatch(action)
                }}>Edit</button></td>
            </tr>
        })
    }

    render() {


        console.log('mangSV', this.props.mangSV)
       

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Ma Sinh Vien</th>
                        <th>Ten Sinh Vien</th>
                        <th>Email</th>
                        <th>So Dien Thoai</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderSV()}
                </tbody>

            </table>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangSV: rootReducer.onTapFormQLSVReducer.mangSV
    }
}

export default connect(mapStateToProps)(TableSV)
// {this.props.mangSV.map((item,index)=>{
//     return <tr key={index}>
//         <td>{item.maSinhVien}</td>
//         <td>{item.tenSinhVien}</td>
//         <td>{item.email}</td>
//         <td>{item.soDienThoai}</td>
//     </tr>
// })}