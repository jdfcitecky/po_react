import React, { Component } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Jumbotron from './ui-components/Jumbotron';

import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
export default class Work extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false
        };
        return (
            <div>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <div className='container'>
                    {/* <h1>work</h1> */}
                    <div className='row'>
                        <div className='col-12'>
                            <Slider {...settings}>
                                <div className='d-flex justify-content-center'>
                                    <img src="http://placekitten.com/g/1000/400" />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src="http://placekitten.com/g/1000/400" />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src="http://placekitten.com/g/1000/400" />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src="http://placekitten.com/g/1000/400" />
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
