import React, { Component } from 'react'

export default class BTGlasses extends Component {
    arrProduct = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/glassesImage/v1.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./img/glassesImage/v2.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./img/glassesImage/v3.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 4,
            price: 30,
            name: "DIOR D6005U",
            url: "./img/glassesImage/v4.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 5,
            price: 30,
            name: "PRADA P8750",
            url: "./img/glassesImage/v5.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 6,
            price: 30,
            name: "PRADA P9700",
            url: "./img/glassesImage/v6.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 7,
            price: 30,
            name: "FENDI F8750",
            url: "./img/glassesImage/v7.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 8,
            price: 30,
            name: "FENDI F8500",
            url: "./img/glassesImage/v8.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
            id: 9,
            price: 30,
            name: "FENDI F4300",
            url: "./img/glassesImage/v9.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    ];

    state={
        glassesPick:{
            id: 9,
            price: 30,
            name: "FENDI F4300",
            url: "./img/glassesImage/v9.png",
            desc:
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        }
    }


    renderGlasses = () => {
        return this.arrProduct.map((item, index) => {
            return <div key={index} className="col-2">
                    <img className="w-100" src={item.url} onClick={()=>{this.glassesClick(item)}}></img>
            </div>
        })
    }

    glassesClick = (glassesClick)=>{
        this.setState({
            glassesPick: glassesClick
        })
    }

    render() {
        let{url,name,desc}=this.state.glassesPick
        return (
            <div className="container">
                <div classname="row">
                    <div className="col-3 m-auto">
                        <div className="card" style={{ backgroundColor: 'cadetblue', borderColor: 'darkblue' }}>
                            <img className="card-img-top" src="./img/glassesImage/model.jpg" alt  style={{
                                position: "relative",
                            }}/>
                            <img src={url} style={{position:"absolute",width:'60%',top:'15%',left:'20%',opacity:'0.75'}} />
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.renderGlasses()}
                </div>
            </div>

        )
    }
}
