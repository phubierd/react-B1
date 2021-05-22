import React, { Component } from 'react'
import style from '../../assets/styles/component/BTGameOanTuTi.module.css'
import { connect } from 'react-redux'



class BTPlayer extends Component {
    render() {

        console.log('this.props BTPlayer', this.props)
        return (
            <div>
                <div ><img src={this.props.mangPlayerClick.find(item=>item.datCuoc===true).hinhAnh} width="20%" height="20%" style={{ background: '#fff' }}></img></div>
                <div className={`${style.speechBubble}`}></div>

                <img src="./img/imgGame1/player.png" alt="./img/imgGame1/player.png" style={{ width: '250px', height: '250px' }} ></img>

                <div className="row ">
                    {this.props.mangPlayerClick.map((item, index) => {

                        //xét giá trị đặt cược thêm viền cho item dc chọn
                        let border = {};
                        if (item.datCuoc ){
                            border = {border:'3px solid orange'}
                        }



                        return <div className="col-4 p-0 " key={index}>
                            <button style={border} className={`${style.btnItem}`} onClick={()=>{
                                const action = {
                                    type:'PLAYER_CHON',
                                    maCuoc:item.ma
                                }
                                this.props.dispatch(action)
                            }}>
                                <img src={item.hinhAnh} width="75px" height="75px" alt={item.hinhAnh} ></img>
                            </button>
                        </div>
                    })}
                    {/* <div className="col-4 p-0 " >
                        <button className={`${style.btnItem}`}>
                            <img src="./img/imgGame1/keo.png" width="75px" height="75px" ></img>
                        </button>
                    </div>
                    <div className="col-4 p-0 " >
                        <button className={`${style.btnItem}`}>
                            <img src="./img/imgGame1/bua.png" width="75px" height="75px" ></img>
                        </button>
                    </div>
                    <div className="col-4 p-0 " >
                        <button className={`${style.btnItem}`}>
                            <img src="./img/imgGame1/bao.png" width="75px" height="75px" ></img>
                        </button>
                    </div> */}


                </div>

            </div>

        )
    }
}

const mapStateToProps = (rootReducer) => {

    return {
        mangPlayerClick: rootReducer.BTGameOanTuTiReducer.mangPlayerClick
    }

}



export default connect(mapStateToProps)(BTPlayer)
