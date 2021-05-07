//tạo statefull component dùng rcc (react class component)
import React, { Component } from 'react'

export default class HeaderStateFull extends Component {

    methodA(){

    }


    //phương thức render là phương thức có sẵn của react class component chứa giao diện của ứng dụng
    render() {
        return (
            <div className="bg-dark text-white">
                <h1 className="display-4 p-5">Title</h1>
                <p className="p-5">Content blah blah</p>
                
            </div>
        )
    }
}
