import React, { Component } from 'react';
import "./Comment.css"
export default class Comment extends Component {

    constructor(props) {
        super(props)

    }
    render() {

        if (this.props.isnew === "true") {
            return (
                <div className='row'>
                    <div className="col-md-12">
                        <div class="commented-section mt-2">
                            <div class="d-flex flex-row align-items-center commented-user mb-2">
                                <h5 class="mr-2">{this.props.name}</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">{this.props.date}</span></div>
                            <div class="comment-text-sm text-left"><span>{this.props.text}</span></div>
                            <div class="d-flex flex-row mt-3">
                                <button type="button" className="btn btn-success mx-2">Approve</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            )
        }

        else {
            return (< div className='row' >
                <div className="col-md-12">
                    <div class="commented-section mt-2">
                        <div class="d-flex flex-row align-items-center commented-user mb-2">
                            <h5 class="mr-2">{this.props.name}</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">{this.props.date}</span></div>
                        <div class="comment-text-sm text-left"><span>{this.props.text}</span></div>
                        <div class="d-flex flex-row mt-3">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div >
            )
        }
        return (
            <div className='row'>
                <div className="col-md-12">
                    <div class="commented-section mt-2">
                        <div class="d-flex flex-row align-items-center commented-user mb-2">
                            <h5 class="mr-2">{this.props.name}</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">{this.props.date}</span></div>
                        <div class="comment-text-sm text-left"><span>{this.props.text}</span></div>
                        <div class="d-flex flex-row mt-3">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );




    }
}