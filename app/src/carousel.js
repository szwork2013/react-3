import React from 'react';
import { WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile';

export default class CarouselExp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    beforeSlide(from, to) {
        console.log(`slide from ${from} to ${to}`);
    }

    slideTo(index) {
        console.log('slide to', index);
    }

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            selectedIndex: this.state.current,
            beforeChange: this.beforeSlide,
            afterChange: this.slideTo

        };
        return ( < div >
            < div className = "pagination-container" >
            < WingBlank >
            < Carousel {...settings } >
            < Flex justify = "center"
            className = "flex-container-justify" >
            < h3 > Carousel 1 < /h3> < /Flex > < /Carousel> < /WingBlank > < WhiteSpace size = "lg" / >
            < /div> < /div >
        );
    }
}
