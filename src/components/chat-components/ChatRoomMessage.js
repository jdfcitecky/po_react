// this will be chat dot
import React, { Component } from 'react';
import './ChatRoomMessage.css'
export default class ChatRoomMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            time: "",
            type: "sender",
            profileURL: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
        }
    }
    componentDidMount() {
        this.setState({
            text: this.props.text,
            time: this.props.time,
            type: this.props.type,
        })
    }

    render() {
        let { text, time, type, profileURL } = this.state
        if (type === "sender") {
            return (
                <div className="d-flex flex-row justify-content-end">
                    <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{text}</p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">{time}</p>
                    </div>
                    <img src={profileURL} alt="avatar sent" className='chatRoomMessageAvatar' />
                </div>
            )
        }
        if (type === "other") {
            return (
                <div className="d-flex flex-row justify-content-start">
                    <img src={profileURL}
                        alt="avatar receive" className='chatRoomMessageAvatar' />
                    <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3 receiveBackground" >{text}</p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{time}</p>
                    </div>
                </div>
            )
        }
        return (
            <div>Type error</div>
        );
    }
}