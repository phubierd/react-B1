import React, { Component } from 'react'
import {connect} from 'react-redux'


class KQTroChoi extends Component {
    render() {
        console.log('this.props KQTroChoi',this.props)
        return (
            <div className="text-center container">
                <div className="display-4">
                    <div>Bạn chọn: <span className="text-danger">{this.props.ketQuaChon ? 'TÀI' : 'XỈU'}</span></div>
                </div>
                <div className="display-4">
                    <div>Số Bàn Thắng: <span className="text-danger">{this.props.soBanThang}</span></div>
                </div>
                <div className="display-4">
                    <div>Số Bàn chơi: <span className="text-danger">{this.props.tongSoBanChoi}</span></div>
                </div>
                <div className="display-4" onClick={()=>{
                    //tạo 1 action đưa lên redux
                    const action={
                        type:'PLAY-GAME',
                    }
                    //dùng hàm dispatch để gửi dữ liệu đi
                    this.props.dispatch(action)
                }}>
                    <button className="btn btn-success">
                        <span className="display-4 p-2">
                            PLAY GAME!!!
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer)=>{


    //lay gia tri tu reducer về tạo thành props của component
    return {
        soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
        tongSoBanChoi: rootReducer.baiTapGameXucXacReducer.tongSoBanChoi,
        ketQuaChon: rootReducer.baiTapGameXucXacReducer.ketQuaChon,
    }
}

export default connect(mapStateToProps,null)(KQTroChoi);
