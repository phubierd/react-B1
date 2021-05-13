import React, { Component } from 'react'

export default class OnTap125product extends Component {
    render() {
        let {item} = this.props;

            return (
            <div className="col-4 " >
            <div className="card" style={{ backgroundColor: 'cadetblue', borderColor: 'darkblue' }}>
                <img className="card-img-top w-100" src={item.hinhAnh} alt={item.tenSP} style={{ width: '100%', height: '350px' }} />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <p className="card-text">{item.giaBan.toLocaleString()}</p>
                    <button className="btn btn-danger" onClick={()=>{this.props.detailProduct(item)}}>Xem chi tiet</button>
                </div>
            </div>
        </div>
        )
    }
}
