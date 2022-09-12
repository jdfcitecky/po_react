// this will be chat dot
import React, { Component } from 'react';
import "./ChatDot.css"
import ChatList from './ChatList';
import { MessageCircle, X } from 'react-feather';
export default class ChatDot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            chatRoomcollapse: false,

        }
    }

    handleClick = () => {
        console.log("click")
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    handleChatRoomClick = () => {
        console.log("click")
        this.setState({
            chatRoomcollapse: !this.state.chatRoomcollapse,
        })
    }

    render() {
        let { collapse, chatRoomcollapse } = this.state
        if (!collapse) {
            return (
                <div className="floatButton">
                    <div className="chatDot">
                        <MessageCircle color='#ffffff' size={48} className="feather-24 feather-file-text" onClick={this.handleClick} />
                        {/* <i class="fas fa-chevron-down"></i> */}
                    </div>
                </div>
            )
        }
        if (!chatRoomcollapse) {
            return (
                <div className="container floatChatRoom-half">
                    <div className='row'>
                        <div className='col-12 d-flex flex-row-reverse'>
                            <div className='closeBtn mt-2'>
                                <X color='#ffffff' size={8} className="feather-8 feather-file-text" onClick={this.handleClick} />
                            </div>
                        </div>
                    </div>
                    <ChatList />

                </div>
            );
        }

        return (
            <div className="container floatChatRoom">
                <div className='row'>
                    <div className='col-12 d-flex flex-row-reverse'>
                        <div className='closeBtn mt-2'>
                            <X color='#ffffff' size={8} className="feather-8 feather-file-text" onClick={this.handleClick} />
                        </div>
                    </div>
                </div>
                <ChatList />

            </div>
        );
    }
}