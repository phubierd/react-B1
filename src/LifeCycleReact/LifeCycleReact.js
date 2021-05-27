import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycleReact extends Component {

    constructor(props){
        super(props);
        console.log('contructor');

        this.state={
            object:{
                like:1
            },
            like:1
        }
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps');
        return null;
    }

    // shouldComponentUpdate(newProps,newState){
        //if else như thế nào đó để xác định component có cần chạy lại hay ko
        //return true: chạy tiếp render, false ko chạy tiếp render
        // return false;
    // }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h1>{this.state.like}like</h1>
                <button className="btn btn-success" onClick={()=>{

                    let object = {...this.state.object};
                    object.like +=1;

                    this.setState({
                        like:this.state.like +1,
                        object:object
                    })
                }}>Like</button>
                hello men!
                <ChildComponent object={this.state.object}/>
            
                {/* {this.state.like >5 ? '' : <ChildComponent/>} */}
                
            </div>
        )
    }


    componentDidMount(){
        //thƯờng dùng để gọi api từ backend
        console.log('componentDidMount');

        
    }

    componentDidUpdate(preProps,preState){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
}
