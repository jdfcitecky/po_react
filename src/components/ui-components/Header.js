import React, { Component } from 'react';
import ModalLogin from './ModalLogin';
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
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
    render() {
        return (
            <div>
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="text-muted" href="/manage">Manage</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href="/">Hsin's Portfilio</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <div class="input-group input-group-sm">

                                <input id="searchBar" value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <a className="text-muted" href={`/search/${this.state.searchValue}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                            </a>

                            <a className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#login" href="/signin">Sign in</a>
                        </div>
                    </div>
                </header>
            </div>

        );
    }
}