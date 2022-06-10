import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-muted" href="/">Home</a>
                    <a className="p-2 text-muted" href="/search/frontend">Forntend</a>
                    <a className="p-2 text-muted" href="/search/backend">Backend</a>
                    <a className="p-2 text-muted" href="/search/msproject">M.S.Project</a>
                    <a className="p-2 text-muted" href="/search/design">Design</a>
                    <a className="p-2 text-muted" href="/">Contact</a>
                </nav>
            </div>
        );
    }
}