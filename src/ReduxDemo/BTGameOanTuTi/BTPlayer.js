import React, { Component } from 'react'
import style from '../../assets/styles/component/BTGameOanTuTi.module.css'

export default class BTPlayer extends Component {
    render() {
        return (
            <div>
                <div ><img src="./img/imgGame1/bao.png" width="20%" height="20%" style={{background:'#fff'}}></img></div>
                <div className={`${style.speechBubble}`}></div>

                <img src="./img/imgGame1/player.png" alt="./img/imgGame1/player.png" style={{ width: '250px', height: '250px' }} ></img>

                <div className="row">
                    <div className="col-4" >
                        <img src="./img/imgGame1/keo.png" width="50%" height="70%" style={{background:'#fff', cursor:'pointer'}}></img>
                    </div>
                    <div className="col-4" >
                        <img src="./img/imgGame1/keo.png" width="50%" height="70%" style={{background:'#fff', cursor:'pointer'}}></img>
                    </div>
                    <div className="col-4" >
                        <img src="./img/imgGame1/keo.png" width="50%" height="70%" style={{background:'#fff', cursor:'pointer'}}></img>
                    </div>


                </div>

            </div>

        )
    }
}
