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

        }
    }


    componentDidMount() {
        this.getMessages()
        window.setTimeout(this.scrollMsgToBottom, 700)
    }

    getMessages = () => {
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        myHeaders.append("token", this.props.jwt)
        const payload = {
            work_id: 0,
        }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        // here is the testing data
        let messages = [{
            senderID: 1,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
            time: "Tue Sep 13 2022 15:17:14 GMT+0800 (GMT+08:00)"
        },
        {
            senderID: 2,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
            time: "Tue Sep 13 2022 15:17:14 GMT+0800 (GMT+08:00)"
        },
        {
            senderID: 2,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
            time: "Tue Sep 13 2022 15:17:14 GMT+0800 (GMT+08:00)"
        },
        {
            senderID: 1,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
            time: "Tue Sep 13 2022 15:17:14 GMT+0800 (GMT+08:00)"
        },
        {
            senderID: 2,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
            time: "Tue Sep 13 2022 15:17:14 GMT+0800 (GMT+08:00)"
        },
        {
            senderID: 1,
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
            time: "Tue Sep 13 2022 15:17:14 GMT+0800 (GMT+08:00)"
        },]
        let messagesWithType = this.addType(messages)
        this.setState({
            isLoaded: true,
            messages: messagesWithType,
        })
        // fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/work/list`, requestOptions)
        //     .then((response) => {
        //         if (response.status != "200") {
        //             let err = Error
        //             err.message = "Invalid response code: " + response.status
        //             this.setState({ error: err })
        //         }
        //         return response.json()
        //     })
        //     .then((json) => {
        //         this.setState({
        //             works: this.state.works.concat(json["data"]).map(work => this.colorAssign(work)),
        //             maxPage: json["data"].length,
        //             isLoaded: true,
        //         },
        //             (error) => {
        //                 this.setState({
        //                     isLoaded: true,
        //                     error
        //                 })
        //             })
        //         this.handleCategory("All")
        //     })
    }

    addType = (messages) => {
        let id = window.localStorage.getItem("memberID")
        let messagesWithType = []
        let i = 0
        messages.forEach(m => {
            m["id"] = "msg" + String(i)
            if (m.senderID == id) {
                m["type"] = "sender"
            } else {
                m["type"] = "other"
            }
            i++
            messagesWithType.push(m)
        })
        return messagesWithType
    }

    handleSendClick = () => {
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

    scrollMsgToBottom = () => {
        let lastMsgId = "#msg" + String(this.state.messages.length - 1)
        let lastMsg = document.querySelector(lastMsgId)
        lastMsg.scrollIntoView({ behavior: "smooth" })
    }

    render() {
        let { messages, isLoaded } = this.state

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
        return (
            <div >
                {/* <h1>{"ROOM ID iS " + this.props.chatRoomID}</h1> */}
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="pt-3 pe-3 chatRoom">

                        {messages.map((m) => (
                            <ChatRoomMessage text={m.text} time={m.time} type={m.type} id={m.id} />
                        ))}
                    </div>
                    {/* {this.scrollMsgToBottom()} */}

                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='d-flex flex-row mb-3 pos-relative'>
                                    <input name="message" id="message" placeholder="Type message" value={this.state.message} onChange={(event) => this.setState({ message: event.target.value })} type="text" className="form-control mr-2 ml-0 mt-0 chatRoomInput" />
                                    <div onClick={this.handleSendClick} className="chatListSearchBtn d-flex justify-content-center" >
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