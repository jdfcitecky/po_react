// this will be chat dot
import React, { Component } from 'react';
import "./ChatDot.css"
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import ReactLoading from 'react-loading';
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
            chatRoomListClick: false,
            searchValue: "",
            chatRoomMessages: {},
            webSocketList: {},
            // Below is for chat room
            messages: [],
            message: "",
            sended: false,
            ws: "",
            hasOtherMsg: false,
            // for chat room load more messages
            pageStart: 0,
            pageLimit: 5,
            isLoading: false,
            hasMoreMessages: true,
            hasFirstScrollToBtm: false,
            // show there is new msg
            hasNewMessages: true,


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
        if (newMsg.chat_room_id == this.state.chatRoomID) {

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
                if (newMsg.sender_id != memberID) {
                    newMsg.id = ("msg" + String(this.state.messages.length))
                    newMsg.type = "other"
                    let newMessages = this.state.messages
                    newMessages.push(newMsg)
                    this.setState({
                        messages: newMessages,
                        hasFirstScrollToBtm: true
                    })
                    // show has new msg
                    let chatRoom = document.querySelector("#chatRoomMain")
                    console.log(chatRoom.scrollTop, chatRoom.scrollHeight, chatRoom.clientHeight)
                    if (chatRoom != null) {
                        if (chatRoom.scrollTop + chatRoom.clientHeight + 100 <= chatRoom.scrollHeight) {
                            console.log("NEW MSG SHOW")
                            this.setState({
                                hasNewMessages: true,
                            })
                            window.setTimeout(() => {
                                console.log("NEW MSG CLEAR")
                                this.setState({
                                    hasNewMessages: false,
                                })
                            }, 1000)
                        }

                    }
                }
                let chatRoom = document.querySelector("#chatRoomMain")
                if (chatRoom.scrollTop + chatRoom.clientHeight + 100 >= chatRoom.scrollHeight) {
                    window.setTimeout(this.scrollMsgToBottomAuto, 500)
                }

            }
            return
        }
    }

    scrollMsgToBottom = () => {
        let chatRoomID = this.state.chatRoomID
        let lastMsgId = "#msg" + String(this.state.chatRoomMessages[String(chatRoomID)].length - 1)
        let lastMsg = document.querySelector(lastMsgId)
        if (this.state.chatRoomMessages[String(chatRoomID)].length > 5) {
            lastMsg.scrollIntoView({ behavior: "smooth" })
        }
    }

    scrollMsgToBottomAuto = () => {
        let chatRoomID = this.state.chatRoomID
        let lastMsgId = "#msg" + String(this.state.messages.length - 1)
        let lastMsg = document.querySelector(lastMsgId)
        if (this.state.chatRoomMessages[String(chatRoomID)].length > 5) {
            lastMsg.scrollIntoView({ behavior: "auto" })
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
        // store the messsage back
        if (this.state.message.length != 0) {
            let newMessages = this.state.chatRoomMessages
            newMessages[String(preChatRoomId)] = this.state.messages
            this.setState({
                chatRoomMessages: newMessages,
            })

        }
        if (preChatRoomId != -1) {
            this.updateChatRoomUnread(preChatRoomId)
        }
        this.setState({
            collapse: !this.state.collapse,
            chatRoomcollapse: false,
        })
    }

    handleChatRoomClick = (id) => {
        if (!this.state.chatRoomListClick) {
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
            let newMessages = []
            let preMessages = this.state.chatRoomMessages[String(id)]
            for (let i = 0; i < preMessages.length; i++) {
                let msg = preMessages[i]
                msg.id = ("msg" + String(i))
                newMessages.push(msg)
            }
            this.setState({
                chatRoomcollapse: false,
            }, () => {
                this.setState({
                    chatRoomcollapse: true,
                    chatRoomList: newChatRoomList,
                    chatRoomID: id,
                    chatRoomListClick: true,
                    // chat room
                    ws: this.state.webSocketList[String(id)],
                    messages: newMessages,
                    hasMoreMessages: true,
                    hasFirstScrollToBtm: false,

                },)
            })
            window.setTimeout(this.scrollMsgToBottom, 500)
            window.setTimeout(() => { this.setState({ chatRoomListClick: false, }) }, 700)
        }

    }

    handleCloseChatRoom = () => {
        let preChatRoomId = this.state.chatRoomID
        this.updateChatRoomUnread(preChatRoomId)
        this.setState({
            chatRoomcollapse: false,
            // for chat room
            messages: [],
            message: "",
            sended: false,
            ws: "",
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

    // For chat room
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
                chat_room_id: Number(this.state.chatRoomID),
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

    updateMessagesFrontEnd = (newMsg) => {
        newMsg.id = ("msg" + String(this.state.messages.length))
        newMsg.type = "sender"
        let newMessages = this.state.messages
        newMessages.push(newMsg)
        this.setState({
            messages: newMessages,
        })
        window.setTimeout(this.scrollMsgToBottomAuto, 500)
    }

    scrollLoading = () => {
        let chatRoom = document.querySelector("#chatRoomMain")
        if (chatRoom != null) {
            // prevent scroll load at first scroll to btm
            if (chatRoom.scrollTop > 100 && !this.state.hasFirstScrollToBtm) {
                this.setState({
                    hasFirstScrollToBtm: true
                })
            }
            //below is some property that can used to implement the loading function
            //(chatRoom.scrollTop)
            //(chatRoom.scrollHeight)
            //(chatRoom.clientHeight)
            if (chatRoom.scrollTop < 5 && this.state.hasFirstScrollToBtm) {
                this.getMoreChatRoomMessages()
            }
        }
    }

    getMoreChatRoomMessages = () => {
        if (this.state.isLoading == false && this.state.hasMoreMessages) {
            let stateName = String(this.state.chatRoomID)
            let myHeaders = new Headers()
            let jwt = window.localStorage.getItem("jwt").slice(1, -1)
            myHeaders.append("Content-Type", "application/json")
            myHeaders.append("Authorization", "Bearer " + jwt)
            myHeaders.append("token", jwt)
            const payload = {
                chat_room_id: Number(this.state.chatRoomID),
                page_start: Number(this.state.messages.length),
                page_limit: Number(this.state.pageLimit),
            }
            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: myHeaders,
            }
            this.setState({
                isLoading: true,
                pageStart: this.state.pageStart + this.state.pageLimit
            })
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
                    if (json.data.length == 0) {
                        this.setState({
                            hasMoreMessages: false,
                            isLoading: false,
                        })
                        return
                    }
                    let newMessages = json.data
                    if (this.state.messages.length != 0) {
                        this.state.messages.forEach((m) => {
                            newMessages.push(m)
                        })
                    }
                    newMessages = this.addType(newMessages)
                    this.setState({
                        messages: []
                    }, () => {
                        this.setState({
                            messages: newMessages,
                            isLoading: false,
                        })
                    })

                })
        }
    }

    render() {
        let { isLoaded, collapse, chatRoomcollapse, chatRoomList, isLoading, hasMoreMessages, messages } = this.state
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
                        {/* BELOW IS THE CHAT ROOM */}
                        <div className='chatRoomFrame mt-2'>
                            <div className="col-md-12 col-lg-12 col-xl-12 pt-3">
                                <div id="chatRoomMain" className="pt-3 pe-3 chatRoom" onScroll={this.scrollLoading}>
                                    {isLoading && (
                                        <div>
                                            <div className="align-items-center text-center row d-flex justify-content-center my-2">
                                                <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={50} width={50} />
                                            </div>
                                            <div className="align-items-center text-center row d-flex justify-content-center">
                                                <p>Loading...</p>
                                            </div>
                                        </div>
                                    )}
                                    {!hasMoreMessages && (
                                        <div className="d-flex flex-row justify-content-center border-top mt-2">
                                            <div className='mt-2'>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">There is no more message.</p>
                                            </div>
                                        </div>
                                    )}
                                    {messages.length == 0 && (
                                        <div className="d-flex flex-row justify-content-center border-top mt-2">
                                            <div className='mt-2'>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">There is no more message.</p>
                                            </div>
                                        </div>
                                    )}
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
                        {/* ABOVE IS THE CHAT ROOM */}
                    </div>
                    <div className='col-6'>
                        <ChatList handleChatRoomClick={this.handleChatRoomClick} chatRoomList={chatRoomList} />
                    </div>
                </div>
            </div>
        );
    }
}