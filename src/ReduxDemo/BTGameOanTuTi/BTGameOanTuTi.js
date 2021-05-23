import React, { Component } from 'react'
import style from '../../assets/styles/component/BTGameOanTuTi.module.css'
import BTNPC from './BTNPC'
import BTPlayer from './BTPlayer'
import KQTroChoiOanTuTi from './KQTroChoiOanTuTi'
import {connect} from 'react-redux'



 class BTGameOanTuTi extends Component {
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
                        <button className="btn btn-info" onClick={()=>{

                            let count = 1;
                            let randomNPCItem = setInterval(()=>{
                                let action = {
                                    type: 'NPC_RANDOM'
                                }
                                count++;
                                if (count >=10){
                                    clearInterval(randomNPCItem)

                                    let action = {
                                        type: 'END_GAME'

                                    }
                                    this.props.dispatch(action)
                                    
                                }
                                this.props.dispatch(action)
                            },100)


                            // const action = {
                            //     type: 'NPC_RANDOM'
                            // }
                            // this.props.dispatch(action)
                        }}>PlayGame!!!</button>
                    </div>
                    <div className="col-4">
                        <BTNPC/>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect (null)(BTGameOanTuTi)