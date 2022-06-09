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
                    <div class="commented-section mt-2">
                        <div class="d-flex flex-row align-items-center commented-user">
                            <h5 class="mr-2">{this.props.name}</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">{this.props.date}</span></div>
                        <div class="comment-text-sm text-left"><span>{this.props.text}</span></div>
                        <div
                            class="reply-section">
                            <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="dot ml-2"></span>

                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

        );
    }
}