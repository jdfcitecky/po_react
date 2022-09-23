//this will be chatlist
import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import ReactLoading from 'react-loading';
import { Search, X } from 'react-feather';
import './ChatList.css'
export default class ChatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            chatRoomList: [],
            chatRoomListShow: [],
            searchValue: "",
            chatRoomMessages: {},
            webSocketList: {},

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
    }
    componentDidMount() {
        this.getChatRoomList()
        window.setTimeout(this.checkInitIsDone, 500)
    }

    checkInitIsDone = () => {
        let listLen = this.state.chatRoomList.length
        let msgLen = Object.keys(this.state.chatRoomMessages).length
        let wsLen = Object.keys(this.state.webSocketList).length
        console.log("do init check ", listLen, msgLen, wsLen)
        if (listLen != 0 && msgLen != 0 && msgLen == listLen) {
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

    handleChatRoomClick = (id) => {
        this.props.handleChatRoomClick(id)
    }


    handleCancelSearchClick = () => {
        this.setState({
            searchValue: "",
            chatRoomListShow: this.state.chatRoomList,
        })
    }

    handleSearchClick = () => {
        let searchValue = new RegExp(this.state.searchValue)
        let chatRoomAll = this.state.chatRoomList
        let newChatRoomList = []
        chatRoomAll.forEach((c) => {
            if (c.alias.match(searchValue) != null) {
                newChatRoomList.push(c)
            }
        })
        this.setState({
            chatRoomListShow: newChatRoomList,
        })

    }

    getChatRoomList = () => {
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
                console.log(newChatRoomList)
                newChatRoomList.forEach((chatRoom) => {
                    this.getChatRoomMessages(chatRoom.chat_room_id)
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
                prechatRoomMessages[stateName] = json.data
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
        let { isLoaded, chatRoomListShow, searchValue } = this.state
        console.log("MSGS", this.state.chatRoomMessages)
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
        // if (chatRoomListShow.length == 0) {

        // }
        return (
            <div className="chatListFrame mt-2">
                <div className='row m-1'>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='d-flex flex-row mb-3 pos-relative mt-3'>
                                    {searchValue != "" && (
                                        <div className='searchCancelBtn'>
                                            <X color='#333333' size={8} className="feather-8 feather-file-text" onClick={this.handleCancelSearchClick} />
                                        </div>
                                    )}
                                    <input name="search" id="searchvalue" placeholder="Search" value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} type="text" className="form-control mr-2 ml-0 mt-0 chatListSearchInput" />
                                    <div onClick={this.handleSearchClick} className="chatListSearchBtn d-flex justify-content-center" >
                                        <Search color='#333333' className="feather-16 feather-file-text align-self-center" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12 mb-3">
                                <div className='chatList'>
                                    <div className="list-unstyled mb-0">
                                        {chatRoomListShow.length == 0 && (
                                            <div className="d-flex flex-row justify-content-center border-top mt-2">
                                                <div className='mt-2'>
                                                    <p className="small me-3 mb-3 rounded-3 text-muted">There is no result.</p>
                                                </div>
                                            </div>
                                        )}
                                        {chatRoomListShow.map((i) => (

                                            <div className="p-2 border-bottom li-85" onClick={() => this.handleChatRoomClick(i.chat_room_id)}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row li-80">
                                                        <div className='li-80-img'>
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                alt="avatar" className="d-flex align-self-center me-3 img-90" />
                                                            <span className="badge bg-success badge-dot"></span>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="fw-bold mb-0">{i.alias}</p>

                                                        </div>
                                                        <div className="pt-1 ml-2">
                                                            {i.unread_number != 0 && (
                                                                <span className="badge bg-danger rounded-pill float-end" style={{ color: "white" }}>{i.unread_number}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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