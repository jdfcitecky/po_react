import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Sidebar.css'
import { FilePlus, MessageCircle, File } from 'react-feather';
export default class Card extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div class="col-md-2 d-none d-md-block bg-light sidebar">

                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Content</span>
                                <a class="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-left" to="/manage/articles">
                                <File size={24} className="mb-1 feather feather-file-text" />
                                Articles
                            </Link>
                        </li>
                        <li class="nav-item text-left">
                            <Link class="nav-link" to="/manage/comments">
                                <MessageCircle size={24} className="mb-1 feather feather-file-text" />
                                Comments
                            </Link>
                        </li>
                        <li class="nav-item">
                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Create</span>
                                <a class="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                        </li>
                        <li class="nav-item">

                            <Link class="nav-link text-left" to="/edit/article">
                                <FilePlus size={24} className="mb-1 feather feather-file-text" />
                                Article
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}