//this will be chatlist
import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import ReactLoading from 'react-loading';
import { Search } from 'react-feather';
import './ChatList.css'
export default class ChatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            chatRoomList: [],
            chatRoomListShow: [],
            searchValue: "",
            showBackListBtn: false,

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
    }
    componentDidMount() {
        console.log("MOUNT")
        this.getChatRoomList()
    }

    handleChatRoomClick = (id) => {
        this.props.handleChatRoomClick(id)
    }

    handleBackListClick = () => {
        this.setState({
            chatRoomListShow: this.state.chatRoomList,
            showBackListBtn: false,
        })

    }

    handleSearchClick = () => {
        let searchValue = new RegExp(this.state.searchValue)
        let chatRoomAll = this.state.chatRoomList
        let newChatRoomList = []
        chatRoomAll.forEach((c) => {
            console.log(c)
            console.log(c.userName.match(searchValue))
            if (c.userName.match(searchValue) != null) {
                newChatRoomList.push(c)
            }
            console.log(newChatRoomList)
        })
        console.log("LAST ", newChatRoomList)
        this.setState({
            chatRoomListShow: newChatRoomList,
            showBackListBtn: true,
        })

    }

    getChatRoomList = () => {
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


    render() {
        let { isLoaded, chatRoomListShow } = this.state
        console.log("RENDER ", chatRoomListShow)
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
            <div className="chatListFrame">
                <div className='row m-1'>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='d-flex flex-row mb-3'>
                                    <input name="search" id="text" placeholder="Search" value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} type="text" className="form-control mr-2 ml-0 mt-0 chatListSearchInput" />
                                    <div onClick={this.handleSearchClick} className="chatListSearchBtn d-flex justify-content-center" >
                                        <Search color='#333333' className="feather-16 feather-file-text align-self-center" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='chatList'>
                                    <div className="list-unstyled mb-0">
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