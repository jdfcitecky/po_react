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
        this.handleJWTChange("aaa")
        // evt.preventDefault()
        // let errors = []
        // if (this.state.email === "") {
        //     errors.push("email")
        // }
        // if (this.state.email === "") {
        //     errors.push("password")
        // }
        // this.setState({ errors: errors })
        // if (errors.length > 0) {
        //     return false
        // }
        // const data = new FormData(evt.target)
        // const payload = Object.fromEntries(data.entries())

        // const requestOptions = {
        //     method: "POST",
        //     body: JSON.stringify(payload),
        // }
        // fetch("http://localhost:4000/v1/signin", requestOptions)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         if (data.error) {
        //             this.setState({
        //                 alert: {
        //                     type: "alert-danger",
        //                     message: data.error.message,
        //                 }
        //             })
        //         } else {
        //             console.log(data)
        //             this.handleJWTChange(Object.values(data)[0])
        //             window.localStorage.setItem("jwt", JSON.stringify(Object.values(data)[0]))
        //             this.props.history.push({
        //                 pathname: "/admin"
        //             })
        //         }
        //     })

    }

    handleJWTChange(jwt) {
        this.props.handleJWTChange(jwt)
    }

    handleIsManagerChange(isManager) {
        this.props.handleIsManagerChange(isManager)
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className="wrapper fadeInDown mb-5 mt-5">
                            <div id="formContent">

                                <div class="fadeIn first mt-3">

                                    <p>Enter your information</p>
                                </div>

                                <form onSubmit={this.handleSubmit}>
                                    <input type="email" id="email" class="fadeIn second" name="email" placeholder='email' value={this.state.email} onChange={this.handleChange} />
                                    <input type="text" id="password" class="fadeIn third" name="password" placeholder='password' value={this.state.password} onChange={this.handleChange} />
                                    <input type="submit" className="fadeIn fourth mt-3" value="Log In" />
                                </form>

                                <div id="formFooter">
                                    <p>If you don't have an account please </p>
                                    <a class="underlineHover" href="/signup">sign up</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
