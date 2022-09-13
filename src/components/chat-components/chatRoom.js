//this will be chatroom
import React, { Component } from 'react';
import ChatRoomMessage from './ChatRoomMessage';
import ReactLoading from 'react-loading';
import './ChatRoom.css'
export default class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatRoomID: Number(this.props.ChatRoomID),
            isLoaded: false,
            Messages: [],
            Message: "",

        }
    }

    componentDidMount() {
        this.getMessages()
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
            Messages: messagesWithType,
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
        messages.forEach(m => {
            if (m.senderID == id) {
                m["type"] = "sender"
            } else {
                m["type"] = "other"
            }
            messagesWithType.push(m)
        })
        return messagesWithType
    }

    render() {
        let { Messages, isLoaded } = this.state
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
            <div>

                <div className="col-md-12 col-lg-12 col-xl-12">

                    <div className="pt-3 pe-3 chatRoom">

                        {Messages.map((m) => (
                            <ChatRoomMessage text={m.text} time={m.time} type={m.type} />
                        ))}
                    </div>

                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 3" className='chatRoomMessageAvatar' />
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                            placeholder="Type message" />
                        <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                        <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                        <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                    </div>

                </div>
            </div>

        );
    }
}