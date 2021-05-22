import React, { Component } from 'react'
import {connect} from 'react-redux'


class KQTroChoiOanTuTi extends Component {
    render() {
        console.log('rootReducer KQTroChoi:',this.props)
        return (
            <div className="container text-center">
                <h3 className="text-warning display-4 font-weight-bold">{this.props.txtThongBao}</h3>
                <h3  className="text-success" >Số Bàn Thắng: <span className="text-warning">{this.props.soBanThang}</span></h3>
                <h3 className="text-success">Số Bàn Chơi: <span className="text-warning">{this.props.soBanChoi}</span></h3> 
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return{
        soBanThang: rootReducer.BTGameOanTuTiReducer.soBanThang,
        soBanChoi: rootReducer.BTGameOanTuTiReducer.soBanChoi,
        txtThongBao: rootReducer.BTGameOanTuTiReducer.txtThongBao,
    }

}

export default connect(mapStateToProps)(KQTroChoiOanTuTi);