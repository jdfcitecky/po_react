import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
import "./Signin.css"
export default class Signup extends Component {
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
                                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email" />
                                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                                    <input type="submit" className="fadeIn fourth mt-3" value="Sign up" />
                                </form>



                                <div id="formFooter">
                                    <a class="underlineHover" href="/">Back to home</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
