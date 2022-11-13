// this will be chat dot
import React, { Component } from 'react';
import "./ChatDot.css"
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import { MessageCircle, X, ChevronsRight, ChevronRight } from 'react-feather';
import ChatRoomMessage from './ChatRoomMessage';
export default class ChatDot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalUnread: 0,
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
            refreshChatRoom: String(new Date()),

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
    }
    componentDidMount() {
        window.setTimeout(this.detectLogin, 1000)
    }

    componentWillUnmount() {

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
            console.log(newMsg)
            if (newMsg.sender_id != memberID) {
                newMsg.type = "other"
            } else {
                newMsg.type = "sender"
            }
            newMessages[String(chatRoomID)].push(newMsg)
            this.setState({
                chatRoomMessages: newMessages,
                refreshChatRoom: String(new Date()),
            })
        }
        // update unread number
        if (!this.state.collapse) {
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
        if (this.state.collapse && this.state.chatRoomcollapse) {
            let chatRoomID = this.state.chatRoomID
            let newChatRoomList = this.state.chatRoomList
            for (let i = 0; i < newChatRoomList.length; i++) {
                if (newChatRoomList[i].chat_room_id == newMsg.chat_room_id && newChatRoomList[i].chat_room_id != chatRoomID) {
                    newChatRoomList[i].unread_number++
                }
            }
            this.setState({
                chatRoomList: newChatRoomList,
            })
            if (chatRoomID == newMsg.chat_room_id) {
                window.setTimeout(this.scrollMsgToBottom, 500)
            }
            return
        }
    }
    // TODO here has error , null when message come
    scrollMsgToBottom = () => {
        let chatRoomID = this.state.chatRoomID
        let lastMsgId = "#msg" + String(this.state.chatRoomMessages[String(chatRoomID)].length - 1)
        console.log(lastMsgId)
        let lastMsg = document.querySelector(lastMsgId)
        if (this.state.chatRoomMessages[String(chatRoomID)].length > 10) {
            lastMsg.scrollIntoView({ behavior: "smooth" })
        }
    }

    detectLogin = () => {

        let jwt = window.localStorage.getItem("jwt")
        if (jwt != "" && jwt != null) {
            this.getChatRoomListAndMessagesAndWebSocket()
            window.setTimeout(this.checkInitIsDone, 500)
            window.setTimeout(this.detectLogout, 500)
            return
        }
        window.setTimeout(this.detectLogin, 1000)

    }

    detectLogout = () => {

        let jwt = window.localStorage.getItem("jwt")
        if (jwt == "" || jwt == null) {
            this.clearChatDot()
            window.setTimeout(this.detectLogin, 1000)
            return
        }
        window.setTimeout(this.detectLogout, 500)

    }

    clearChatDot = () => {
        let webSocketList = this.state.webSocketList
        for (let key in webSocketList) {
            webSocketList[key].close(1000)
        }
        this.setState({
            totalUnread: 0,
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
        })

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
            window.setTimeout(this.updateTotalUnread, 1000)
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
                    this.getChatRoomMessages(chatRoom.chat_room_id, 0, 10)
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


    getChatRoomMessages = (chatRoomId, pageStart, pageLimit) => {
        let stateName = String(chatRoomId)
        let myHeaders = new Headers()
        let jwt = window.localStorage.getItem("jwt").slice(1, -1)
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + jwt)
        myHeaders.append("token", jwt)
        const payload = {
            chat_room_id: Number(chatRoomId),
            page_start: Number(pageStart),
            page_limit: Number(pageLimit),
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


    updateChatRoomUnread = (chatRoomId) => {
        let myHeaders = new Headers()
        let jwt = window.localStorage.getItem("jwt").slice(1, -1)
        let time = new Date()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + jwt)
        myHeaders.append("token", jwt)
        const payload = {
            id: 0,
            sender_id: Number(window.localStorage.getItem("memberID")),
            chat_room_id: Number(chatRoomId),
            time: String(time),
            date: 0,
            text: "",
            is_read: false,
            is_hide: false,

        }
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/chatroom/message/update/read`, requestOptions)
            .then((response) => {
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
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
        let preChatRoomId = this.state.chatRoomID
        if (preChatRoomId != -1) {
            this.updateChatRoomUnread(preChatRoomId)
        }
        this.setState({
            collapse: !this.state.collapse,
            chatRoomcollapse: false,
        })
    }

    handleChatRoomClick = (id) => {
        this.updateChatRoomUnread(id)
        let preChatRoomId = this.state.chatRoomID
        if (preChatRoomId != id) {
            this.updateChatRoomUnread(preChatRoomId)
        }
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
        let preChatRoomId = this.state.chatRoomID
        this.updateChatRoomUnread(preChatRoomId)
        this.setState({
            chatRoomcollapse: false,
        })
    }

    addUnreadNumber = (chatRoomList, msgLists) => {
        let memberID = window.localStorage.getItem("memberID")
        let newArray = []
        for (let i = 0; i < chatRoomList.length; i++) {
            let chatRoomId = chatRoomList[i].chat_room_id
            let msgList = msgLists[String(chatRoomId)]
            let unreadNumber = 0
            msgList.forEach((msg) => {
                if (msg.is_read == false && msg.sender_id != memberID) {
                    unreadNumber++
                }
            })
            chatRoomList[i]["unread_number"] = unreadNumber
            newArray.push(chatRoomList[i])
        }
        return newArray
    }

    updateTotalUnread = () => {
        let newTotalUnread = 0
        this.state.chatRoomList.forEach((c) => {
            newTotalUnread += c.unread_number
        })
        this.setState({
            totalUnread: newTotalUnread
        })
        let jwt = window.localStorage.getItem("jwt")
        if (jwt == "" || jwt == null) {
            return
        }
        window.setTimeout(this.updateTotalUnread, 1000)
    }

    render() {
        let { isLoaded, collapse, chatRoomcollapse, chatRoomID, chatRoomList, chatRoomMessages, webSocketList, refreshChatRoom } = this.state
        let chatroomMessageWithId = chatRoomMessages[String(chatRoomID)]
        // let refresh = String(new Date())
        console.log("dot", chatroomMessageWithId)
        if (!isLoaded) {
            return (
                <div className="floatButton">
                    <div className="chatDot-inactive">
                        <MessageCircle color='#ffffff' size={48} className="feather-24 feather-file-text" />
                    </div>
                </div>
            )
        }
        if (!collapse) {
            return (
                <div className="floatButton">
                    {this.state.totalUnread != 0 && (
                        <div className='unread-dot'></div>
                    )}

                    <div className="chatDot">
                        <MessageCircle color='#ffffff' size={48} className="feather-24 feather-file-text" onClick={this.handleClick} />
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
                        <div className='chatRoomFrame mt-2'>
                            <div className="col-md-12 col-lg-12 col-xl-12 pt-3">
                                <div id="chatRoomMain" className="pt-3 pe-3 chatRoom" onScroll={this.scrollLoading}>
                                    {!hasMoreMessages && (
                                        <div className="d-flex flex-row justify-content-center border-top mt-2">
                                            <div className='mt-2'>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">There is no result.</p>
                                            </div>
                                        </div>
                                    )
                                    }
                                    {chatRoomMessages[String(chatRoomID)].map((m) => (
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

                        {/* <ChatRoom key={refreshChatRoom} chatRoomID={this.state.chatRoomID} chatRoomMessages={chatroomMessageWithId} webSocket={webSocketList[String(chatRoomID)]} /> */}
                    </div>
                    <div className='col-6'>
                        <ChatList handleChatRoomClick={this.handleChatRoomClick} chatRoomList={chatRoomList} />
                    </div>
                </div>
            </div>
        );
    }
}