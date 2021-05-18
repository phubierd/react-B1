import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    render() {
        let { gioHang } = this.props;
        let {xoaGioHang,tangGiamSoLuong} = this.props
        return (

            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Gio hang</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Ma SP</td>
                                        <td>Hinh Anh SP</td>
                                        <td>Ten SP</td>
                                        <td>So Luong</td>
                                        <td>Don Gia</td>
                                        <td>Thanh Tien</td>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                   {gioHang.map((spGH,index)=>{
                                       return <tr key={index}>
                                        <td>{spGH.maSP}</td>
                                        <td><img src={spGH.hinhAnh} width={50} height={50}/></td>
                                        <td>{spGH.tenSP}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={()=>{
                                                this.props.tangGiamSoLuong(spGH.maSP,false)
                                            }}>-</button>
                                            {spGH.soLuong}
                                            <button className="btn btn-info" onClick={()=>{
                                                this.props.tangGiamSoLuong(spGH.maSP,true)
                                            }}>+</button>
                                            </td>
                                        <td>{spGH.giaBan.toLocaleString()}</td>
                                        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHang(spGH.maSP)}}>Xoa</button></td>
                                       </tr>
                                   })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5"></td>
                                        <td>Tổng tiền</td>
                                        <td>
                                            {this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                                                return tongTien+=spGioHang.soLuong * spGioHang.giaBan
                                            },0).toLocaleString()}
                                        </td>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

