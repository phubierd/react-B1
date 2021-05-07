import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark pb-5">
                <section className="text-center display-4 ">Best SmartPhone</section>

                <div class="row">
                        <div className="col-3">
                            <BTProduct />
                        </div>
                        <div className="col-3">
                            <BTProduct />
                        </div>
                        <div className="col-3">
                            <BTProduct />
                        </div>
                        <div className="col-3">
                            <BTProduct />
                        </div>
                    </div>
                
            </div>
        )
    }
}
