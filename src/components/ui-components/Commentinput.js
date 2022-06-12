import React, { Component } from 'react';
import Comment from './Comment';
export default class Commentinput extends Component {
    state = {
        textValue: "",
        memberID: "",
        error: null,
        errors: [],
    }

    constructor(props) {
        super(props)
        this.state = {
            textValue: "",
            memberID: this.props.memberID,
            error: null,
            errors: [],
        }
    }

    handleSubmit = (evt) => {
        console.log('submit')
        evt.preventDefault()
        // client side validation
        let errors = []
        if (this.state.textValue == "") {
            this.setState({ error: 'Comment is empty!' })
            errors.push("textValue")
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


    render() {
        let { memberID, error } = this.state
        if (error) {
            return <p>Error: {error}</p>
        } else if (memberID == "") {
            return <div className='row'>
                <div className="col-md-12">
                    <div class="coment-bottom bg-white p-2 px-4">
                        <form className='d-flex flex-row add-comment-section mt-4 mb-4'>
                            <input value='Please sign in to comment.' type="text" class="form-control mr-3" placeholder="Add comment" />
                            <button class="btn btn-secondary my-2" type="submit">Comment</button>
                        </form>
                    </div>
                </div>
            </div>

        }
        return (
            <div className='row'>
                <div className="col-md-12">
                    <div class="coment-bottom bg-white p-2 px-4">
                        <form onSubmit={this.handleSubmit} className='d-flex flex-row add-comment-section mt-4 mb-4'>
                            <input
                                type="hidden"
                                name="id"
                                id="id"
                                value={this.state.memberID}
                                onChange={(event) => this.setState({ memberID: event.target.value })}
                            />
                            <input value={this.state.textValue} onChange={(event) => this.setState({ textValue: event.target.value })} type="text" class="form-control mr-3" placeholder="Add comment" />
                            <button class="btn btn-primary my-2" type="submit">Comment</button>
                            {/* <a className='btn btn-primary my-2' style={{ color: 'white' }}>Comment</a> */}
                        </form>
                    </div>
                </div>
            </div>



        );
    }
}