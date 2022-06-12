import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            isManager: this.props.isManager,
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.logout = this.logout.bind(this)
    }

    doSearch() {
        // this.clearURL()
        let searchValue = this.state.searchValue
        // window.location = "search/" + searchValue
        this.props.history.push("/search" + searchValue)
    }

    clearURL() {
        // window.location = "/"
    }

    logout() {
        this.props.logout()
    }



    render() {
        // console.log('HEADER', this.props.API_IP)
        let loginLink
        if (this.props.jwt === "") {
            loginLink = <Link className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#login" to="/signin">Sign in</Link>
        } else {
            loginLink = <Link className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#login" to="/" onClick={this.logout}>Sign out</Link>
        }
        let manageBtn
        if (this.props.isManager === true) {
            manageBtn = <div className="col-4 pt-1">
                <Link className="text-muted" to="/manage">Manage</Link>
            </div>
        } else {
            manageBtn = <div className="col-4 pt-1">
                <Link className="text-muted" to="/"></Link>
            </div>
        }
        return (
            <div>
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        {manageBtn}
                        <div className="col-4 text-center">
                            <Link className="blog-header-logo text-dark" to="/">Hsin's Portfilio</Link>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <div className="input-group input-group-sm">

                                <input id="searchBar" value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <Link className="text-muted" to={`/search/${this.state.searchValue}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                            </Link>

                            {loginLink}
                        </div>
                    </div>
                </header>
            </div>

        );
    }
}