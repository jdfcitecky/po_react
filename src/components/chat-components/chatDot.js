// this will be chat dot
import React, { Component } from 'react';
import "./ChatDot.css"
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import { MessageCircle, X, ChevronsRight } from 'react-feather';
export default class ChatDot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            chatRoomcollapse: false,
            chatRoomID: -1,

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
    }
    componentDidMount() {
        let jwt = window.localStorage.getItem("jwt")
        this.setState({
            jwt: jwt,
        })
    }

    handleClick = () => {
        console.log("click")
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    handleChatRoomClick = (id) => {
        console.log("click Chatttt", id)
        this.setState({
            chatRoomcollapse: true,
            chatRoomID: id,
        })
    }

    handleCloseChatRoom = () => {
        console.log("Click close")
        this.setState({
            chatRoomcollapse: false,
        })
    }

    render() {
        let { collapse, chatRoomcollapse } = this.state
        let t = window.localStorage.getItem("jwt")
        console.log("JWT", t)
        if (t === "" || t === null) {
            return (
                <div className="floatButton">
                    <div className="chatDot-inactive">
                        <MessageCircle color='#ffffff' size={48} className="feather-24 feather-file-text" />
                        {/* <i class="fas fa-chevron-down"></i> */}
                    </div>
                </div>
            )
        }
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
                    <ChatList handleChatRoomClick={this.handleChatRoomClick} />

                </div>
            );
        }

        return (
            <div className="container floatChatRoom">
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <div className='miniBtn mt-2'>
                            <ChevronsRight color='#333333' size={10} className="feather-8 feather-file-text" onClick={this.handleCloseChatRoom} />
                        </div>
                        <div className='closeBtn mt-2'>
                            <X color='#ffffff' size={8} className="feather-8 feather-file-text" onClick={this.handleClick} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <ChatRoom chatRoomID={this.state.chatRoomID} />
                    </div>
                    <div className='col-6'>
                        <ChatList handleChatRoomClick={this.handleChatRoomClick} />
                    </div>
                </div>
            </div>
        );
    }
}