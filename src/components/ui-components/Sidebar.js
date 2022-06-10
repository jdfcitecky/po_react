import React, { Component } from 'react';
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
                            <a class="nav-link text-left" href="/manage/articles">
                                <File size={24} className="mb-1 feather feather-file-text" />
                                Articles
                            </a>
                        </li>
                        <li class="nav-item text-left">
                            <a class="nav-link" href="/manage/comments">
                                <MessageCircle size={24} className="mb-1 feather feather-file-text" />
                                Comments
                            </a>
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

                            <a class="nav-link text-left" href="/edit/article">
                                <FilePlus size={24} className="mb-1 feather feather-file-text" />
                                Article
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}