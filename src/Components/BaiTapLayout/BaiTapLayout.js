import React, { Component } from 'react'
import BTHeader from './BTHeader';
import BTCarousel from './BTCarousel';
import BTFooter from './BTFooter';
import BTBestLaptop from './BTBestLaptop';
import BTProductList from './BTProductList';

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTCarousel />
                <BTProductList/>
                <BTBestLaptop />
                <BTFooter />
            </div>
        )
    }
}
