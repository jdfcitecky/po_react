//this will be chatroom
import React, { Component } from 'react';
import ChatRoomMessage from './ChatRoomMessage';
import { ChevronRight } from 'react-feather';
import ReactLoading from 'react-loading';
import './ChatRoom.css'
export default class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatRoomID: Number(this.props.ChatRoomID),
            isLoaded: false,
            messages: [],
            message: "",
            sended: false,
            ws: "",
            // for load more messages
            pageStart: 0,
            pageLimit: 10,
            isLoading: false,
            hasMoreMessages: true,

        }
    }


    componentDidMount() {
        console.log("chat room mount")
        this.setState({
            isLoaded: true,
            messages: this.props.chatRoomMessages,
            ws: this.props.webSocket
        })
        if (this.props.chatRoomMessages.length > 0) {
            window.setTimeout(this.scrollMsgToBottom, 700)
        }
    }

    getChatRoomMessages = () => {
        if (this.state.isLoading == false && this.state.hasMoreMessages) {
            this.setState({
                isLoading: true,
                page_start: this.state.pageStart + this.state.pageLimit
            })
            let stateName = String(this.state.chatRoomID)
            let myHeaders = new Headers()
            let jwt = window.localStorage.getItem("jwt").slice(1, -1)
            myHeaders.append("Content-Type", "application/json")
            myHeaders.append("Authorization", "Bearer " + jwt)
            myHeaders.append("token", jwt)
            const payload = {
                chat_room_id: Number(this.state.chatRoomID),
                page_start: Number(this.state.pageStart + this.state.pageLimit),
                page_limit: Number(this.state.pageLimit),
            }

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: myHeaders,
            }
            fetch(`http://${process.env.REACT_APP_API_ADDRESS}/chatroom/message/list`, requestOptions)
                .then((response) => {
                    if (response.status != "200") {
                        let err = Error
                        err.message = "Invalid response code: " + response.status
                        this.setState({ error: err })
                    }
                    return response.json()
                })
                .then((json) => {
                    //----
                    console.log("LOAD MORE MESSAFES!!", json.data)
                    let newMessages = json.data
                    if (this.state.messages.length != 0) {
                        this.state.messages.forEach((m) => {
                            newMessages.push(m)
                        })
                    }
                    this.setState({
                        messages: newMessages,
                        isLoading: false,
                    }, (error) => {
                        this.setState({
                            error
                        })
                    })
                    //----
                    // let prechatRoomMessages = this.state.chatRoomMessages
                    // prechatRoomMessages[stateName] = this.addType(json.data)
                    // this.setState({
                    //     chatRoomMessages: prechatRoomMessages,}
                    //     ,
                    //     (error) => {
                    //         this.setState({
                    //             error
                    //         })
                    //     })
                })
        }
    }


    addType = (messages) => {
        let id = window.localStorage.getItem("memberID")
        let messagesWithType = []
        let i = 0
        messages.forEach(m => {
            m["id"] = "msg" + String(i)
            if (m.sender_id == id) {
                m["type"] = "sender"
            } else {
                m["type"] = "other"
            }
            i++
            messagesWithType.push(m)
        })
        return messagesWithType
    }

    handleSendClickWithWS = () => {
        let ws = this.state.ws
        if (!this.sended) {
            if (this.state.message == "") {
                return
            }
            this.setState({
                message: "",
            })
            let time = new Date()
            let newMsg = {
                senderID: Number(window.localStorage.getItem("memberID")),
                text: this.state.message,
                time: String(time),
                type: "sender",
                id: "msg" + String(this.state.messages.length)
            }
            // have to send to backend
            let jwt = window.localStorage.getItem("jwt").slice(1, -1)
            let myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")
            myHeaders.append("Authorization", "Bearer " + jwt)
            myHeaders.append("token", jwt)
            const payload = {
                id: 0,
                sender_id: Number(window.localStorage.getItem("memberID")),
                chat_room_id: Number(this.props.chatRoomID),
                time: String(time),
                date: this.generateDateInNumberType(),
                text: this.state.message,
                is_read: false,
                is_hide: false,

            }
            ws.send(JSON.stringify(payload))
            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: myHeaders,
            }

            this.updateMessagesFrontEnd(newMsg)

        }

    }

    updateMessagesFrontEnd = (newMsg) => {
        newMsg.id = ("msg" + String(this.state.messages.length))
        newMsg.type = "sender"
        let newMessages = this.state.messages
        newMessages.push(newMsg)
        this.setState({
            messages: newMessages,
        })
        window.setTimeout(this.scrollMsgToBottom, 500)
    }


    handleSendClick = () => {
        if (!this.sended) {
            if (this.state.message == "") {
                return
            }
            let time = new Date()
            let newMsg = {
                senderID: Number(window.localStorage.getItem("memberID")),
                text: this.state.message,
                time: String(time),
                type: "sender",
                id: "msg" + String(this.state.messages.length)
            }
            // have to send to backend
            let jwt = window.localStorage.getItem("jwt").slice(1, -1)
            let myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")
            myHeaders.append("Authorization", "Bearer " + jwt)
            myHeaders.append("token", jwt)
            const payload = {
                id: 0,
                sender_id: Number(window.localStorage.getItem("memberID")),
                chat_room_id: Number(this.props.chatRoomID),
                time: String(time),
                date: this.generateDateInNumberType(),
                text: this.state.message,
                is_read: false,
                is_hide: false,

            }

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: myHeaders,
            }
            fetch(`http://${process.env.REACT_APP_API_ADDRESS}/chatroom/message/save`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        this.setState({
                            alert: {
                                type: "alert-danger",
                                message: data.error.message,
                            }
                        })
                    } else {
                        // console.log(data)
                        this.setState({ sended: true, })
                        setTimeout(() => {
                            this.setState({
                                sended: false
                            })
                        }, 500);
                    }
                })
            let newMessages = []
            if (this.state.messages.length != 0) {
                this.state.messages.forEach((m) => {
                    newMessages.push(m)
                })
            }
            newMessages.push(newMsg)
            this.setState({
                messages: newMessages,
                message: "",
            })
            window.setTimeout(this.scrollMsgToBottom, 500)

        }
    }

    generateDateInNumberType = () => {
        let time = new Date()
        let year = String(time.getFullYear())
        let month = String(time.getMonth() + 1)
        let day = String(time.getDate())
        if (month.length == 1) {
            month = "0" + month
        }
        if (day.length == 1) {
            day = "0" + day
        }
        return Number(year + month + day)

    }


    scrollMsgToBottom = () => {
        let lastMsgId = "#msg" + String(this.state.messages.length - 1)
        let lastMsg = document.querySelector(lastMsgId)
        lastMsg.scrollIntoView({ behavior: "smooth" })
    }

    scrollLoading = () => {

    }

    render() {
        let { messages, isLoaded, hasMoreMessages, isLoading } = this.state
        if (!isLoaded) {
            return (
                <div>
                    <div className="align-items-center text-center row d-flex justify-content-center mt-5">
                        <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={100} width={100} />
                    </div>
                    <div className="align-items-center text-center row d-flex justify-content-center">
                        <p>Loading...</p>
                    </div>
                </div>

            )
        }
        let chatRoom = document.querySelector("#chatRoomMain")
        if (chatRoom != null) {
            console.log(chatRoom.scrollTop)
            console.log(chatRoom.scrollHeight)
            console.log(chatRoom.clientHeight)
            if (chatRoom.scrollTop < 60) {
                console.log("fire up")
                this.getChatRoomMessages()
            }
        }
        return (
            <div className='chatRoomFrame mt-2'>
                {/* <h1>{"ROOM ID iS " + this.props.chatRoomID}</h1> */}
                <div className="col-md-12 col-lg-12 col-xl-12 pt-3">
                    <div id="chatRoomMain" className="pt-3 pe-3 chatRoom">
                        {isLoading && (
                            <div>
                                <div className="align-items-center text-center row d-flex justify-content-center mt-5">
                                    <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={100} width={100} />
                                </div>
                                <div className="align-items-center text-center row d-flex justify-content-center">
                                    <p>Loading...</p>
                                </div>
                            </div>
                        )}
                        {!hasMoreMessages && (
                            <div className="d-flex flex-row justify-content-center border-top mt-2">
                                <div className='mt-2'>
                                    <p className="small me-3 mb-3 rounded-3 text-muted">There is no result.</p>
                                </div>
                            </div>
                        )
                        }
                        {messages.map((m) => (
                            <ChatRoomMessage text={m.text} time={m.time} type={m.type} id={m.id} />
                        ))}
                    </div>
                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='d-flex flex-row mb-3 pos-relative'>
                                    <input name="message" id="message" placeholder="Type message" value={this.state.message} onChange={(event) => this.setState({ message: event.target.value })} type="text" className="form-control mr-2 ml-0 mt-0 chatRoomInput" />
                                    <div onClick={this.handleSendClickWithWS} className="chatListSearchBtn d-flex justify-content-center" >
                                        <ChevronRight color='#333333' className="feather-16 feather-file-text align-self-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}