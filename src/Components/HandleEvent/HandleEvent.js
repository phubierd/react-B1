import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (name) =>{
        alert(`hello ${name}`)
    }


    handleClick2 = (event) =>{
       {
            //event.target.id; //event.target là chính thẻ xay ra sự kiện
            this.handleClick('phuct');
        }
    }
    render() {
        return (
            <div className="container">
                {/* //Cách 1 */}
                <button id="btn" className="btn btn-success" onClick={(event) =>{
                    //event.target.id; //event.target là chính thẻ xay ra sự kiện
                    // gọi = cách này or cách trên cũng ok
                    // console.log(event.target.className)
                    // alert('cybersoft')

                    this.handleClick('phuct');
                }} >click</button>


                {/* //Cách 2: sử dụng callback function */}
                <button id="btn" className="btn btn-success" onClick={this.handleClick2} >click 2</button>
            </div>
        )
    }
}
