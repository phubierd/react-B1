import React, { Component } from 'react'
import {connect} from 'react-redux'
 class XucXac extends Component {
    render() {
        console.log('this.props MangXucXac',this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-danger">
                            <span className="display-4 p-5" onClick={()=>{
                                //Tạo ra object gửi lên reducer
                                const action = {
                                    type:'CHON_TAI_XIU',
                                    ketQuaChon:true
                                }
                                //sử dụng hàm dispatch từ redux cung cấp đưa action lên reducer
                                this.props.dispatch(action);
                            }}>TÀI</span>
                        </button>
                    </div>
                    <div className="col-4 ">
                        {this.props.mangXucXac.map((item,index)=>{
                            return <img key={index} src={item.hinhAnh} style={{width:50,height:50}} alt="item.diem"/>
                        })}
                        {/* <img src={this.props.mangXucXac[0].hinhAnh} style={{width:50,height:50}} alt="1.png"/>
                        <img src={this.props.mangXucXac[1].hinhAnh} style={{width:50,height:50}} alt="1.png"/>
                        <img src={this.props.mangXucXac[2].hinhAnh} style={{width:50,height:50}} alt="1.png"/> */}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger bg-dark text-light">
                            <span className="display-4 p-5" onClick={()=>{
                                const action ={
                                    type:'CHON_TAI_XIU',
                                    ketQuaChon: false
                                }
                                this.props.dispatch(action)
                            }}>XỈU</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return {
        mangXucXac:rootReducer.baiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)
