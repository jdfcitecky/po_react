import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: this.props.match.params.value,
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-left'>
                        <div className="col-4 pt-0">
                            <p className="text-left text-info">{`Search result for : ${this.state.searchValue}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
