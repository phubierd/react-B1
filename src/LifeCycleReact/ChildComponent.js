import React, { Component,PureComponent } from 'react'

export default class ChildComponent extends PureComponent {

    constructor(props){
        super(props);
        console.log('contructor child')
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps child');
        return null;
    }


    render() {
        console.log('render child')
        return (
            <div>
                <div className="bg-dark text-white">
                    <p className='p-2'>child component</p>
                    {this.props.object.like}
                </div>
                
            </div>
        )
    }


    componentDidMount(){
        console.log('componentDidMount child')

        // this.timeout=setInterval(() => {
        //     console.log('notification')
        // }, 1000);
    }

    componentDidUpdate(preProps,preState){
        console.log('componentDidUpdate child')
    }

    componentWillUnmount(){ //thường dùng để clear các hàm hoặc giá trị chạy ngầm của ứng dụng, hàm chạy trước khi component mất khỏi giao diện
        clearInterval(this.timeout)
        console.log('componentWillUnmount child')
    }
}
