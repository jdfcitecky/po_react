import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to="/">Home</Link>
                    <Link className="p-2 text-muted" to="/timeline">Time line</Link>
                    <Link className="p-2 text-muted" to="/search/frontend">Forntend</Link>
                    <Link className="p-2 text-muted" to="/search/backend">Backend</Link>
                    <Link className="p-2 text-muted" to="/search/msproject">M.S.Project</Link>
                    <Link className="p-2 text-muted" to="/search/design">Design</Link>

                </nav>
            </div>
        );
    }
}