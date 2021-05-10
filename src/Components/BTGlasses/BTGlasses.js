import React, { Component } from "react";

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

  //   renderModal = () => {
  //     return (
  //       <div className="col-3 m-auto">
  //         <div
  //           className="card"
  //           style={{
  //             backgroundColor: "cadetblue",
  //             borderColor: "darkblue",
  //           }}
  //         >
  //           <img
  //             className="card-img-top"
  //             src="./img/glassesImage/model.jpg"
  //             alt
  //           />
  //           <div className="card-body">
  //             <h4 className="card-title">Title</h4>
  //             <p className="card-text">Text</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   };

  renderProduct = () => {
    const arrTagJSX = this.arrProduct.map((item, index) => {
      return (
        <a href="#" className="col-2" key={index}>
          <img className="w-100" src={item.url}></img>
        </a>
      );
    });
    return arrTagJSX;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col-3 m-auto">
              <div
                className="card"
                style={{
                  backgroundColor: "cadetblue",
                  borderColor: "darkblue",
                  width:100,
                  height:100
                }}
              >
                <div style={{
                  background:"./img/glassesImage/model.jpg"
                }}>
                  
                </div>
                {/*  <img
                   className="card-img-top"
                   src="./img/glassesImage/model.jpg"
                   alt
                 /> */}
                <div className="card-body d-none">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>
            <div className="col-3 m-auto">
              {/* <div
                className="card"
                style={{
                  backgroundColor: "cadetblue",
                  borderColor: "darkblue",
                }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt
                />
                <div className="card-body d-none">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row bg-light">{this.renderProduct()}</div>
        </div>
      </div>
    );
  }
}
