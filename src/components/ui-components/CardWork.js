import React, { Component } from 'react';
export default class CardWork extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="col-md-10">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className={`d-inline-block mb-2 text-${this.props.color}`}>{this.props.category}</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">{this.props.title}</a>
                        </h3>
                        <div className="mb-1 text-muted">{this.props.date}</div>
                        <p className="card-text mb-auto">{this.props.text}</p>
                        <a href={`/work/${this.props.id}`}>Read more...</a>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
                </div>
            </div>
        );
    }
}