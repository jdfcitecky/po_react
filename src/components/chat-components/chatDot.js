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
            // Below is for manage all data
            isLoaded: false,
            chatRoomList: [],
            chatRoomListShow: [],
            searchValue: "",
            chatRoomMessages: {},
            webSocketList: {},

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
        this.updateMessages = this.updateMessages.bind(this)
    }
    componentDidMount() {
        window.setTimeout(this.detectLogin, 1000)
    }

    openWebSocket = (chatRoomID, memberID) => {
        //use WebSocket url to Server open link
        let stateName = String(chatRoomID)
        let ws = new WebSocket(`ws://${process.env.REACT_APP_API_ADDRESS}/ws/${chatRoomID}/${memberID}`)

        //assign a function that will execute after WebSocket open
        ws.onopen = () => {
            let prewebSocketList = this.state.webSocketList
            prewebSocketList[stateName] = ws
            this.setState({
                webSocketList: prewebSocketList,
            })
        }

        //assign a function that will execute after WebSocket close
        ws.onclose = () => {

        }

        ws.onmessage = event => {
            var newMsg = JSON.parse(event.data)
            this.updateMessages(newMsg)
        }
    }

    updateMessages = (newMsg) => {
        let newMessages = this.state.chatRoomMessages
        let memberID = Number(window.localStorage.getItem("memberID"))
        let chatRoomID = newMsg.chat_room_id
        if (newMsg.sender_id != memberID) {
            newMsg.id = ("msg" + String(newMessages[String(chatRoomID)].length))
            if (newMsg.sender_id != memberID) {
                newMsg.type = "other"
            } else {
                newMsg.type = "sender"
            }
            newMessages[String(chatRoomID)].push(newMsg)
            this.setState({
                chatRoomMessages: newMessages,
            })
        }
        if (this.state.collapse && !this.state.chatRoomcollapse) {
            let newChatRoomList = this.state.chatRoomList
            for (let i = 0; i < newChatRoomList.length; i++) {
                if (newChatRoomList[i].chat_room_id == newMsg.chat_room_id) {
                    newChatRoomList[i].unread_number++
                }
            }
            this.setState({
                chatRoomList: newChatRoomList,
            })
            return
        }
        if (this.state.chatRoomcollapse) {
            window.setTimeout(this.scrollMsgToBottom, 500)
            return
        }
    }

    scrollMsgToBottom = () => {
        let chatRoomID = this.state.chatRoomID
        let lastMsgId = "#msg" + String(this.state.chatRoomMessages[String(chatRoomID)].length - 1)
        let lastMsg = document.querySelector(lastMsgId)
        lastMsg.scrollIntoView({ behavior: "smooth" })
    }

    detectLogin = () => {
        let jwt = window.localStorage.getItem("jwt")
        if (jwt != "" && jwt != null) {
            this.getChatRoomListAndMessagesAndWebSocket()
            window.setTimeout(this.checkInitIsDone, 500)
            return
        }
        window.setTimeout(this.detectLogin, 1000)

    }

    checkInitIsDone = () => {
        let listLen = this.state.chatRoomList.length
        let msgLen = Object.keys(this.state.chatRoomMessages).length
        let wsLen = Object.keys(this.state.webSocketList).length
        if (listLen != 0 && msgLen != 0 && wsLen != 0 && msgLen == listLen && wsLen == listLen) {
            let newChatRoomList = this.addUnreadNumber(this.state.chatRoomList, this.state.chatRoomMessages)
            this.setState({
                chatRoomList: newChatRoomList,
                chatRoomListShow: newChatRoomList,
                isLoaded: true
            })
            return
        }
        window.setTimeout(this.checkInitIsDone, 500)
    }

    getChatRoomListAndMessagesAndWebSocket = () => {
        let jwt = window.localStorage.getItem("jwt").slice(1, -1)
        let memberID = Number(window.localStorage.getItem("memberID"))
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + jwt)
        myHeaders.append("token", jwt)
        const payload = {
            member_id: memberID,
        }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/chatroom/list`, requestOptions)
            .then((response) => {
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
            })
            .then((json) => {
                let newChatRoomList = json.data
                newChatRoomList.forEach((chatRoom) => {
                    this.getChatRoomMessages(chatRoom.chat_room_id)
                    this.openWebSocket(chatRoom.chat_room_id, memberID)
                })
                this.setState({
                    chatRoomList: newChatRoomList,
                    chatRoomListShow: newChatRoomList,
                },
                    (error) => {
                        this.setState({
                            error
                        })
                    })
            })
    }


    getChatRoomMessages = (chatRoomId) => {
        let stateName = String(chatRoomId)
        let myHeaders = new Headers()
        let jwt = window.localStorage.getItem("jwt").slice(1, -1)
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + jwt)
        myHeaders.append("token", jwt)
        const payload = {
            chat_room_id: Number(chatRoomId),
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
                let prechatRoomMessages = this.state.chatRoomMessages
                prechatRoomMessages[stateName] = this.addType(json.data)
                this.setState({
                    chatRoomMessages: prechatRoomMessages,
                },
                    (error) => {
                        this.setState({
                            error
                        })
                    })
            })
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

    handleClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    handleChatRoomClick = (id) => {
        let newChatRoomList = this.state.chatRoomList
        for (let i = 0; i < newChatRoomList.length; i++) {
            if (newChatRoomList[i].chat_room_id == Number(id)) {
                newChatRoomList[i].unread_number = 0
            }
        }
        this.setState({
            chatRoomcollapse: false,
        }, () => {
            this.setState({
                chatRoomcollapse: true,
                chatRoomList: newChatRoomList,
                chatRoomID: id,
            })
        })
    }

    handleCloseChatRoom = () => {
        this.setState({
            chatRoomcollapse: false,
        })
    }

    addUnreadNumber = (chatRoomList, msgLists) => {
        let newArray = []
        for (let i = 0; i < chatRoomList.length; i++) {
            let chatRoomId = chatRoomList[i].chat_room_id
            let msgList = msgLists[String(chatRoomId)]
            let unreadNumber = 0
            msgList.forEach((msg) => {
                if (msg.is_read == false) {
                    unreadNumber++
                }
            })
            chatRoomList[i]["unread_number"] = unreadNumber
            newArray.push(chatRoomList[i])
        }
        return newArray
    }

    render() {
        let { collapse, chatRoomcollapse, chatRoomID, chatRoomList, chatRoomMessages, webSocketList } = this.state
        let t = window.localStorage.getItem("jwt")
        console.log(chatRoomList)
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
                    <div className='row'>
                        <div className='col-6'>
                            <ChatList handleChatRoomClick={this.handleChatRoomClick} chatRoomList={chatRoomList} />
                        </div>
                    </div>


                </div>
            );
        }

        return (
            <div className="container floatChatRoom">
                <div className='dot-pos-relative'>
                    <div className='miniBtn mt-2'>
                        <ChevronsRight color='#333333' size={10} className="feather-16 feather-file-text" onClick={this.handleCloseChatRoom} />
                    </div>
                </div>
                <div className='row'>

                    <div className='col-12 d-flex justify-content-end'>
                        <div className='closeBtn mt-2'>
                            <X color='#ffffff' size={8} className="feather-8 feather-file-text" onClick={this.handleClick} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <ChatRoom chatRoomID={this.state.chatRoomID} chatRoomMessages={chatRoomMessages[String(chatRoomID)]} webSocket={webSocketList[String(chatRoomID)]} />
                    </div>
                    <div className='col-6'>
                        <ChatList handleChatRoomClick={this.handleChatRoomClick} chatRoomList={chatRoomList} />
                    </div>
                </div>
            </div>
        );
    }
}