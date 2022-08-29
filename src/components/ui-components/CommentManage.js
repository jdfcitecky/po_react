import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import "./Comment.css"
export default class CommentManage extends Component {

    constructor(props) {
        super(props)

    }

    handleSubmit = (evt) => {
        console.log('submit')
        evt.preventDefault()
        // client side validation
        let errors = []
        if (this.props.jwt == "") {
            errors.push("jwt")
        }
        this.setState({ errors: errors })
        if (errors.length > 0) {
            return false
        }
        // we passed, so post info
        const data = new FormData(evt.target)
        const payload = Object.fromEntries(data.entries())
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        console.log(payload)
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        // fetch('http://localhost:4000/v1/admin/editmovie', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.error) {
        //             this.setState({
        //                 alert: { type: "alert-danger", message: data.error.message }
        //             })
        //         } else {
        //             this.setState({
        //                 alert: { type: "alert-success", message: "Changes saved!" }

        //             })
        //             this.props.history.push({
        //                 pathname: "/admin",
        //             })
        //         }
        //     })

    }


    confirmDelete = (e) => {
        console.log("would delete comment id", this.props.id)
        confirmAlert({
            title: "Delete Comment",
            message: "Are you sure?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const myHeaders = new Headers()
                        myHeaders.append("Content-Type", "application/json")
                        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
                        // fetch("http://localhost:4000/v1/admin/deletemovie/" + this.state.work.id, { method: "GET", headers: myHeaders, })
                        //     .then(response => response.json)
                        //     .then(data => {
                        //         if (data.error) {
                        //             this.setState({
                        //                 alert: { type: "alert-danger", message: data.error.message }
                        //             })
                        //         } else {
                        //             this.props.history.push({
                        //                 pathname: "/admin",
                        //             })
                        //         }
                        //     })
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        })
    }
    render() {

        if (this.props.isnew === true) {
            return (
                <div className='row'>
                    <div className="col-md-12">
                        <div className="commented-section mt-2">
                            <div className="d-flex flex-row align-items-center commented-user mb-2">
                                <h5 className="mr-2">{this.props.name}</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">{this.props.date}</span></div>
                            <div className="comment-text-sm text-left"><span>{this.props.text}</span></div>
                            <div className="d-flex flex-row mt-3">
                                <form onSubmit={this.handleSubmit} className=''>
                                    <input
                                        type="hidden"
                                        name="id"
                                        id="id"
                                        value={this.props.id}
                                    />

                                    <button className="btn btn-success" type="submit">Approve</button>
                                    {/* <a className='btn btn-primary' style={{ color: 'white' }}>Save</a> */}
                                    <a href='#!' onClick={() => this.confirmDelete()} className='btn btn-danger ms-1 ml-1' style={{ color: 'white' }}>
                                        Delete
                                    </a>
                                </form>
                                {/* <button type="button" className="btn btn-success mx-2">Approve</button>
                                <button type="button" className="btn btn-danger">Delete</button> */}
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            )
        }

        else {
            return (<div className='row'>
                <div className="col-md-12">
                    <div className="commented-section mt-2">
                        <div className="d-flex flex-row align-items-center commented-user mb-2">
                            <h5 className="mr-2">{this.props.name}</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">{this.props.date}</span></div>
                        <div className="comment-text-sm text-left"><span>{this.props.text}</span></div>
                        <div className="d-flex flex-row mt-3">
                            <form onSubmit={this.handleSubmit} className=''>
                                <input
                                    type="hidden"
                                    name="id"
                                    id="id"
                                    value={this.props.id}
                                />

                                {/* <a className='btn btn-primary' style={{ color: 'white' }}>Save</a> */}
                                <a href='#!' onClick={() => this.confirmDelete()} className='btn btn-danger ms-1 ml-1' style={{ color: 'white' }}>
                                    Delete
                                </a>
                            </form>
                            {/* <button type="button" className="btn btn-success mx-2">Approve</button>
                        <button type="button" className="btn btn-danger">Delete</button> */}
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            )
        }
        return (
            <div className='row'>
                <div className="col-md-12">
                    <div className="commented-section mt-2">
                        <div className="d-flex flex-row align-items-center commented-user mb-2">
                            <h5 className="mr-2">{this.props.name}</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">{this.props.date}</span></div>
                        <div className="comment-text-sm text-left"><span>{this.props.text}</span></div>
                        <div className="d-flex flex-row mt-3">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );




    }
}