import React, { Component } from 'react';
import Commentinput from './ui-components/Commentinput';
import Comment from './ui-components/Comment';
import Slider from "react-slick";
import Jumbotron from './ui-components/Jumbotron';

import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
export default class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: "Title",
            text: "default text default text default text default text default text default text default text default text",
            tools: "python, mysql, golang, javascript",
            downloadlink: "#",
            comments: [{ name: "Default", date: "2022-06-09", text: "AAAA" }, { name: "Default2", date: "2022-06-09", text: "AAAA" }],
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        var comments = this.state.comments
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
                    <div className='row mt-5'>
                        <div className='col-6 text-left'>
                            <h1 className="display-5">{this.state.title}</h1>
                            <p>{this.state.text}</p>
                            <p><a class="btn btn-secondary" href={this.state.downloadlink} role="button">Download &raquo;</a></p>
                        </div>
                        <div className='col-6'>
                            <div className="bg-light mr-md-1 pt-1 px-1 pt-md-1 px-md-1 text-left overflow-hidden">
                                <div className="my-3 p-3">
                                    <h5 >Tools</h5>
                                    <p className="lead">{this.state.tools}</p>
                                </div>
                                {/* <div className="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
                            </div>
                        </div>
                    </div>
                    <Commentinput />
                    {comments.map((c) => (
                        <Comment name={c.name} date={c.date} text={c.text} />
                    ))}
                </div>
            </div>
        );
    }
}
