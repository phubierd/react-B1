import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSPGioHang extends Component {
    render() {
        let{item} = this.props;
        let{themGioHang}=this.props;
        return (
            <div className="container">
                <div className="row">
                    {item.map((item,index)=>{
                        return <div className="col-4" key={index}>
                            <SanPhamGioHang item={item} themGioHang={this.props.themGioHang}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
