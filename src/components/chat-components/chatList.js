//this will be chatlist
import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import ReactLoading from 'react-loading';
import './ChatList.css'
export default class ChatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            chatRoomList: [],
            chatRoomListShow: [],

        }
        this.handleChatRoomClick = this.handleChatRoomClick.bind(this)
    }
    componentDidMount() {
        this.getChatRoomList()
    }

    handleChatRoomClick = (id) => {
        this.props.handleChatRoomClick(id)
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
            { userName: "Carol Horwitz", chatRoomID: 5, unReadNumber: 0 },
            { userName: "Fed Horwitz", chatRoomID: 6, unReadNumber: 44 },
            { userName: "Abby Horwitz", chatRoomID: 7, unReadNumber: 32 },],
            chatRoomListShow: [{ userName: "Marie Horwitz", chatRoomID: 1, unReadNumber: 99 },
            { userName: "Jack Horwitz", chatRoomID: 2, unReadNumber: 99 },
            { userName: "Tina Horwitz", chatRoomID: 3, unReadNumber: 2 },
            { userName: "John Horwitz", chatRoomID: 4, unReadNumber: 0 },
            { userName: "Carol Horwitz", chatRoomID: 5, unReadNumber: 0 },
            { userName: "Fed Horwitz", chatRoomID: 6, unReadNumber: 44 },
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
                <div className='row m-1'>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="input-group rounded mb-3">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className='chatList'>
                                    <ul className="list-unstyled mb-0">
                                        {chatRoomListShow.map((i) => (
                                            <ChatListItem userName={i.userName} unReadNumber={i.unReadNumber} chatRoomID={i.chatRoomID} handleChatRoomClick={this.handleChatRoomClick} />
                                        ))}
                                    </ul>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </div>


        );
    }
}