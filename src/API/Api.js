import React, { Component } from 'react'
import axios from 'axios';

export default class Api extends Component {
    state = {
        mangPhim: []
    }

    // componentDidMount(){
    //     //gọi api lấy dữ liệu load vào state.mangPhim
    //     var promise = axios ({
    //         url:'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=gp01',
    //         method: 'get'
    //     });

    //     //xu ly thanh cong
    //     promise.then(result =>{
    //         this.setState({mangPhim:result.data})

    //         console.log('result',result.data)
    //     })
    //     //xu ly that bai
    //     promise.catch(errors =>{
    //         console.log('errors',errors.reponse.data)
    //     })

    //     console.log('123')
    // }

    async componentDidMount() {
        //để trong didmount thì ng dùng k cần làm gi cả tự gọi lên.
        //goi api lay data load vao state.mangPhim
        try {
            var result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=gp01',
                method: 'get'
            });

            this.setState({
                mangPhim:result.data
            })
        }catch (errors){
            console.log('errors',errors.reponse.data)
        }
    }


    render() {
        return (
            <div className='container'>
                <h3 className="text-center display-4">Danh sách Phim</h3>
                <div className='row'>
                    {this.state.mangPhim.map((phim, index) => {
                        return <div className='col-4' key={index}>
                            <div className="card text-white bg-primary">
                                <img className="card-img-top" src={phim.hinhAnh} />
                                <div className="card-body">
                                    <h4 className="card-title">{phim.tenPhim}</h4>
                                    <p className="card-text">{phim.moTa}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
