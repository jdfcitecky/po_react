import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
import "./Signin.css"
export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            API_IP: process.env.REACT_APP_API_ADDRESS,
            email: "",
            password: "",
            error: null,
            errors: [],
            alert: {
                type: "d-done",
                message: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (evt) => {
        let value = evt.target.value
        let name = evt.target.name
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    handleSubmit = (evt) => {
        // console.log("sign up submit")
        evt.preventDefault()
        let errors = []
        if (this.state.email === "") {
            errors.push("email")
        }
        if (this.state.email === "") {
            errors.push("password")
        }
        this.setState({ errors: errors })
        if (errors.length > 0) {
            return false
        }
        const data = new FormData(evt.target)
        let payload = Object.fromEntries(data.entries())
        payload.is_manager = false
        payload.id = 0
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        }
        // console.log(requestOptions)
        fetch(`http://${this.state.API_IP}/member/update`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    this.setState({
                        alert: {
                            type: "alert-danger",
                            message: data.error.message,
                        }
                    })
                } else {
                    console.log(data)
                    // this.handleJWTChange(Object.values(data)[0])
                    // window.localStorage.setItem("jwt", JSON.stringify(Object.values(data)[0]))
                    this.props.history.push({
                        pathname: "/"
                    })
                }
            })

    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className="wrapper fadeInDown mb-5 mt-5">
                            <div id="formContent">

                                <div className="fadeIn first mt-3">

                                    <p>Enter your information</p>
                                </div>

                                <form onSubmit={this.handleSubmit}>
                                    <input type="email" id="email" className="fadeIn second" name="email" placeholder='email' value={this.state.email} onChange={this.handleChange} />
                                    <input type="text" id="password" className="fadeIn third" name="password" placeholder='password' value={this.state.password} onChange={this.handleChange} />
                                    <input type="submit" className="fadeIn fourth mt-3" value="Sign Up" />
                                </form>

                                <div id="formFooter">
                                    <p>If you have an account please </p>
                                    <a className="underlineHover" href="/signin">sign in</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

