import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
import "./Signin.css"
export default class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.handleMemberID = this.handleMemberID.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)

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
        // this.handleJWTChange("aaa")
        // this.handleMemberID("10")
        // this.handleIsManagerChange(true)
        // window.localStorage.setItem("jwt", "aaa")
        // window.localStorage.setItem("memberID", "10")
        // window.localStorage.setItem("isManager", true)
        // this.props.history.push({
        //     pathname: "/"
        // })
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
        const payload = Object.fromEntries(data.entries())

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        }
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/login`, requestOptions)
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
                    console.log(data[0])
                    console.log(data["data"]["tokenKey"])
                    this.handleJWTChange(Object.values(data)[0])
                    window.localStorage.setItem("jwt", JSON.stringify(data["data"]["tokenKey"]))
                    window.localStorage.setItem("email", JSON.stringify(data["data"]["email"]))
                    window.localStorage.setItem("memberID", JSON.stringify(data["data"]["memberID"]))
                    if (data["data"]["isManager"]) {
                        window.localStorage.setItem("isManager", 1)
                        this.handleIsManagerChange(data["data"]["isManager"])
                    }
                    this.handleJWTChange(data["data"]["tokenKey"])
                    this.handleMemberID(data["data"]["memberID"])
                    this.handleEmailChange(data["data"]["email"])

                    this.props.history.push({
                        pathname: "/admin"
                    })
                }
            })

    }

    handleJWTChange(jwt) {
        this.props.handleJWTChange(jwt)
    }

    handleIsManagerChange(isManager) {
        this.props.handleIsManagerChange(isManager)
    }


    handleMemberID(memberID) {
        this.props.handleMemberID(memberID)
    }

    handleEmailChange(email) {
        this.props.handleEmailChange(email)
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
                                    <input type="submit" className="fadeIn fourth mt-3" value="Log In" />
                                </form>

                                <div id="formFooter">
                                    <p>If you don't have an account please </p>
                                    <a className="underlineHover" href="/signup">sign up</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
