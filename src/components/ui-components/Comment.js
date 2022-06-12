import React, { Component } from 'react';
import "./Comment.css"
export default class Comment extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='row'>
                <div className="col-md-12">
                    <div className="commented-section mt-2">
                        <div className="d-flex flex-row align-items-center commented-user">
                            <h5 className="mr-2">{this.props.name}</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">{this.props.date}</span></div>
                        <div className="comment-text-sm text-left"><span>{this.props.text}</span></div>
                        <div
                            className="reply-section">
                            <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="dot ml-2"></span>

                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

        );
    }
}