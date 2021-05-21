import React, { Component } from 'react'
import style from '../../assets/styles/component/BTGameOanTuTi.module.css'
import BTNPC from './BTNPC'
import BTPlayer from './BTPlayer'
import KQTroChoiOanTuTi from './KQTroChoiOanTuTi'




export default class BTGameOanTuTi extends Component {
    render() {
        return (
            <div className={`${style.bgGame}`}>
            {/* // <div style={{background:'url(../img/imgGame1/bgGame.png', width:'100vw',height:'100vh'}}> */}
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <BTPlayer/>
                    </div>
                    <div className="col-4">
                        <KQTroChoiOanTuTi/>
                        <button className="btn btn-info">PlayGame!!!</button>
                    </div>
                    <div className="col-4">
                        <BTNPC/>
                    </div>
                </div>
            </div>
        )
    }
}
