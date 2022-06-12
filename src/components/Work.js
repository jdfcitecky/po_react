import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Commentinput from './ui-components/Commentinput';
import Comment from './ui-components/Comment';
import Slider from "react-slick";
import ReactLoading from 'react-loading';

export default class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            work: {
                id: this.props.match.params.id,
                title: "Title",
                text: "default text default text default text default text default text default text default text default text",
                tools: "python, mysql, golang, javascript",
                year: "2020",
                downloadlink: "#",
                pictureone: "http://placekitten.com/g/1000/400",
                picturetwo: "http://placekitten.com/g/1000/400",
                picturethree: "http://placekitten.com/g/1000/400",
                picturefour: "http://placekitten.com/g/1000/400",
                picturefive: "http://placekitten.com/g/1000/400",
                comments: [{ name: "Default", date: "2022-06-09", text: "AAAA", isnew: "true", id: "1" }, { name: "Default2", date: "2022-06-09", text: "AAAA", isnew: "false", id: "2" }],
            },
            isLoaded: true,
            memberID: this.props.memberID,
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        var comments = this.state.work.comments
        var settings = {
            dots: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
        };
        let { isLoaded, error, isManager } = this.state
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            return <div>
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
                <div className='container fadeIn'>
                    <div className='row'>
                        <div className='col-12'>
                            <Slider {...settings}>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.pictureone} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturetwo} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturethree} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturefour} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturefive} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6 text-left'>
                            <div class="d-flex flex-row align-items-center commented-user">
                                <h1 className="display-5">{this.state.work.title}</h1><span className="dot mx-2"></span><span className=" mr-2">{this.state.work.year}</span>
                            </div>
                            <p>{this.state.work.text}</p>
                            <p><a className="btn btn-secondary" href={this.state.work.downloadlink} role="button">Download &raquo;</a></p>
                        </div>
                        <div className='col-6'>
                            <div className="bg-light mr-md-1 pt-1 px-1 pt-md-1 px-md-1 text-left overflow-hidden">
                                <div className="my-3 p-3">
                                    <h5 >Tools</h5>
                                    <p className="lead">{this.state.work.tools}</p>
                                </div>
                                {/* <div className="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
                            </div>
                        </div>
                    </div>
                    <Commentinput memberID={this.state.memberID} />
                    <div className="align-items-center text-center row d-flex justify-content-center mt-5">
                        <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={100} width={100} />
                    </div>
                    <div className="align-items-center text-center row d-flex justify-content-center">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>

        }
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
                <div className='container fadeIn'>
                    <div className='row'>
                        <div className='col-12'>
                            <Slider {...settings}>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.pictureone} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturetwo} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturethree} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturefour} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={this.state.work.picturefive} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6 text-left'>
                            <div className="d-flex flex-row align-items-center commented-user">
                                <h1 className="display-5">{this.state.work.title}</h1><span className="dot mx-2"></span><span className=" mr-2">{this.state.work.year}</span>
                            </div>
                            <p>{this.state.work.text}</p>
                            <p><a className="btn btn-secondary" href={this.state.work.downloadlink} role="button">Download &raquo;</a></p>
                        </div>
                        <div className='col-6'>
                            <div className="bg-light mr-md-1 pt-1 px-1 pt-md-1 px-md-1 text-left overflow-hidden">
                                <div className="my-3 p-3">
                                    <h5 >Tools</h5>
                                    <p className="lead">{this.state.work.tools}</p>
                                </div>
                                {/* <div className="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
                            </div>
                        </div>
                    </div>
                    <Commentinput memberID={this.state.memberID} />
                    {comments.map((c) => (
                        <Comment name={c.name} date={c.date} text={c.text} />
                    ))}
                </div>
            </div>
        );
    }
}
