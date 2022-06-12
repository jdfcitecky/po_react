import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Card extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="col-md-6 fadeIn">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className={`d-inline-block mb-2 text-${this.props.color}`}>{this.props.category}</strong>
                        <h3 className="mb-0">
                            <p className="text-dark" href="#">{this.props.title}</p>
                        </h3>
                        <div className="mb-1 text-muted">{this.props.date}</div>
                        <p className="card-text mb-auto">{this.props.text}</p>
                        <Link to={this.props.link}>{this.props.linkwords}</Link>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
                </div>
            </div>
        );
    }
}