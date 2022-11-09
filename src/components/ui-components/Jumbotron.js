import React, { Component } from 'react';
export default class Jumbotron extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Hi I'am ChuanHsin Cho</h1>
                    <p className="lead my-3">{this.props.text}</p>
                    <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>
        );
    }
}