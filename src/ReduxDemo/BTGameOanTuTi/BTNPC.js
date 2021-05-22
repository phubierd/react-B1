import React, { Component } from 'react'
import style from '../../assets/styles/component/BTGameOanTuTi.module.css'
import{connect} from 'react-redux'


 class BTNPC extends Component {
    render() {
        return (
            <div>
                <div ><img src={this.props.npc.hinhAnh} width="20%" height="20%" style={{ background: '#fff' }}></img></div>
                <div className={`${style.speechBubble}`}></div>

                <img src="./img/imgGame1/playerComputer.png" alt="./img/imgGame1/playerComputer.png" style={{ width: '250px', height: '250px' }} ></img>

               

            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return {
        npc:rootReducer.BTGameOanTuTiReducer.npc
    }
}

export default connect (mapStateToProps)(BTNPC)