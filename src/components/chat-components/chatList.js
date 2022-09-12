//this will be chatlist
import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import './ChatList.css'
export default class ChatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: window.location.href,

        }
    }
    render() {
        return (
            <div>
                <div className='row m-1'>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="input-group rounded mb-3">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='chatList'>
                                    <ul className="list-unstyled mb-0">
                                        <ChatListItem userName="Marie Horwitz" unReadNumber="99" />
                                        <ChatListItem userName="Marie Horwitz" unReadNumber="99" />
                                        <ChatListItem userName="Marie Horwitz" unReadNumber="99" />
                                        <ChatListItem userName="Marie Horwitz" unReadNumber="99" />
                                        <ChatListItem userName="Marie Horwitz" unReadNumber="99" />

                                    </ul>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </div>


        );
    }
}