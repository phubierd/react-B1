import React, { Component } from 'react'

export default class StateDemo extends Component {

    // isLogin= false;
    userName = 'PhuCT';
    state = {
        //state: là thuộc tính chứa các giá trị bị thay đổi khi người dùng thao tác (click, change, blur...)
        isLogin : false,
    }

    renderLogin = () => {
        if (this.state.isLogin === true) {
            return <span>Hello {this.userName}</span>
        }
        return <button className="btn btn-outline-success" onClick={(event)=>{
            //khi click vào nút button sẽ gọi hàm login
            this.login();
        }}>Đăng Nhập</button>
    }

    login = () =>{
    //    let newState = {
    //        isLogin : true
    //    }

    //this.setState là phương thức có sẵn của react class component dùng để thay đổi giá trj của thuộc tính state đồng thời cho phsep giao diện render lại
    //this.setState là 1 phương thức bất đồng bộ
       this.setState({
           isLogin : true
       }, function(){
           //func này sẽ chạy sau khi công việc setstate xử lý xong
           console.log('state',this.state)
       }); 
       console.log('state',this.state)
    }



    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                           <span className="nav-item">
                               {/* //cách 1 nếu ít thẻ thì dùng */}
                               {/* {this.isLogin === true ? <span className="text-white">Hello {this.userName}</span> :  <button className="btn btn-outline-success">Đăng Nhập</button>} */}

                               {/* cách 2: nếu nhiều thẻ hoặc dài quá thì phải xài biding */}
                               {this.renderLogin()}
                           </span>
                        </form>
                    </div>
                </nav>
            </div>

        )
    }
}
