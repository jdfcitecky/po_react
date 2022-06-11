import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
import "./Signin.css"
export default class Signin extends Component {
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

                                <form>
                                    <input type="text" id="name" class="fadeIn second" name="name" placeholder="Name" />
                                    <input type="text" id="password" class="fadeIn third" name="password" placeholder="password" />
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
