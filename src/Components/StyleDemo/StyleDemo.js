import React, { Component } from 'react'

//cách 1 import đường dẫn css trực tiếp => các component khác sẽ bị ảnh hưởng trực tiếp
import './styleDemo.css'


//cách 2: import css module
import style from './styleDemo.module.css'

export default class StyleDemo extends Component {

    state = {
        fontSize: 15
    }

    render() {
        return (
            //cách 1
            <div className="container">
                {/* cách1 */}
                <p className="text-red">1231231</p>

                {/* //cách 2 */}
                <p className={`${style.bgColor} ${style['text-green']} display-4`}>cyber</p>


                {/* cách 3 */}
                <p style ={{
                    color:'red',
                    backgroundColor:'black',
                    fontSize:this.state.fontSize
                }} className="text-red">ahihi</p>
                <button onClick={() => {
                    this.setState({
                        fontSize: this.state.fontSize + 1
                    })
                }}>+</button>
            </div>



        )
    }
}
