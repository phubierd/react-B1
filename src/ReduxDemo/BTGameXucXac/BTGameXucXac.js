import React, { Component } from 'react'
import KQTroChoi from './KQTroChoi'
import XucXac from './XucXac'
import style from '../../assets/styles/component/BTGameXucXac.module.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            // <div style={{background:'url(./img/imgGame/bgGame.png', height:'100vh', width:'100ww'}}>
            <div className={`${style.bgGame}`}>
                <h3 className="text-center display-4 pt-5">BT Game Xuc Xac</h3>
                
                <XucXac/>
                <KQTroChoi/>
            </div>
        )
    }
}
