import React, { Component } from 'react'
import './UserProfile.css'
export default class UserProfile extends Component {

    state = {
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        passwordConfirm:'',

    }

    handleChangValue = (event)=>{
        let {name,value} = event.target
        console.log(name,value);

        this.setState({
            [name]:value
        },()=>{
            console.log(this.state)
        })
        // console.log(this.state)
    }


    render() {
        return (
            <div className="bg-dark" >
                <form className="bg-white">
                    <h1 className="text-center">User Profile</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="group">
                                    <input type="text"  name="firstName" required onChange={
                                        // (event)=>{
                                        // console.log("1")
                                        // console.log(event.target.name)
                                        // console.log(event.target.value)
                                        // this.setState({
                                        //     firstName: event.target.value,

                                        // })
                                        // console.log(this.state)
                                        // this.handleChangValue
                                    // }}
                                        this.handleChangValue
                                }
                                    />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>firstName</label>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="group">
                                    <input type="text" name="lastName" required  onChange={this.handleChangValue}/>
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>lastName</label>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <div className="group">
                                    <input type="text" name="userName" required  onChange={this.handleChangValue}/>
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>userName</label>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <div className="group">
                                    <input type="text" name="email" required  onChange={this.handleChangValue}/>
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>email</label>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="group">
                                    <input type="password"  name="password" required onChange={this.handleChangValue}/>
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>password</label>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="group">
                                    <input type="password" name="passwordConfirm" required  onChange={this.handleChangValue}/>
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>passwordConfirm</label>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-info text-center w-100">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
