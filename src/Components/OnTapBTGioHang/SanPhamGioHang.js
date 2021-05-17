import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        let { item } = this.props;
        let {themGioHang} = this.props;
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={item.hinhAnh} alt width={300} height={300}/>
                <div className="card-body bg-dark">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <p className="card-text">{item.giaBan.toLocaleString()}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        this.props.themGioHang(item)
                    }}>Them gio hang</button>
                </div>
            </div>

        )
    }
}
