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

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
    }
    componentDidMount() {
        this.getChatRoomList()
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
            if (c.userName.match(searchValue) != null) {
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
        console.log("MEMBER ", memberID)
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
        this.setState({
            isLoaded: true,
            chatRoomList: [{ userName: "Marie Horwitz", chatRoomID: 1, unReadNumber: 99 },
            { userName: "Jack Horwitz", chatRoomID: 2, unReadNumber: 99 },
            { userName: "Tina Horwitz", chatRoomID: 3, unReadNumber: 2 },
            { userName: "John Horwitz", chatRoomID: 4, unReadNumber: 0 },
            { userName: "Carol AAB", chatRoomID: 5, unReadNumber: 0 },
            { userName: "Fed AAB", chatRoomID: 6, unReadNumber: 44 },
            { userName: "Abby Horwitz", chatRoomID: 7, unReadNumber: 32 },],
            chatRoomListShow: [{ userName: "Marie Horwitz", chatRoomID: 1, unReadNumber: 99 },
            { userName: "Jack Horwitz", chatRoomID: 2, unReadNumber: 99 },
            { userName: "Tina Horwitz", chatRoomID: 3, unReadNumber: 2 },
            { userName: "John Horwitz", chatRoomID: 4, unReadNumber: 0 },
            { userName: "Carol AAB", chatRoomID: 5, unReadNumber: 0 },
            { userName: "Fed AAB", chatRoomID: 6, unReadNumber: 44 },
            { userName: "Abby Horwitz", chatRoomID: 7, unReadNumber: 32 },]
        })
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/chatroom/list`, requestOptions)
            .then((response) => {
                console.log("response")
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
            })
            .then((json) => {
                console.log("json back ", json)
                // this.setState({
                //     works: this.state.works.concat(json["data"]).map(work => this.colorAssign(work)),
                //     maxPage: json["data"].length,
                //     isLoaded: true,
                // },
                //     (error) => {
                //         this.setState({
                //             isLoaded: true,
                //             error
                //         })
                //     })
            })
    }


    render() {
        let { isLoaded, chatRoomListShow, searchValue } = this.state
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

                                            <div className="p-2 border-bottom li-85" onClick={() => this.handleChatRoomClick(i.chatRoomID)}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row li-80">
                                                        <div className='li-80-img'>
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                alt="avatar" className="d-flex align-self-center me-3 img-90" />
                                                            <span className="badge bg-success badge-dot"></span>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="fw-bold mb-0">{i.userName}</p>

                                                        </div>
                                                        <div className="pt-1 ml-2">
                                                            {i.unReadNumber != 0 && (
                                                                <span className="badge bg-danger rounded-pill float-end" style={{ color: "white" }}>{i.unReadNumber}</span>
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