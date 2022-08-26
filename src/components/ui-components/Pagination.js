import React, { Component } from 'react';

import ReactLoading from 'react-loading';

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log("ppppppppp", this.props.className)
        if (true) {
            return <ul className={`pagination ${this.props.className}`}>
                <li key="pagination-p" className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li key="pagination-1" className="page-item"><a className="page-link" href="#">1</a></li>
                <li key="pagination-2" className="page-item"><a className="page-link" href="#">2</a></li>
                <li key="pagination-m" className="page-item"><a className="page-link" href="#">...</a></li>
                <li key="pagination-3" className="page-item"><a className="page-link" href="#">3</a></li>
                <li key="pagination-n" className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        }
        return (
            <ul className="pagination pt-3 ml-2">
                <li key="pagination-p" className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li key="pagination-1" className="page-item"><a className="page-link" href="#">1</a></li>
                <li key="pagination-2" className="page-item"><a className="page-link" href="#">2</a></li>
                <li key="pagination-m" className="page-item"><a className="page-link" href="#">...</a></li>
                <li key="pagination-3" className="page-item"><a className="page-link" href="#">3</a></li>
                <li key="pagination-n" className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        );
    }
}
