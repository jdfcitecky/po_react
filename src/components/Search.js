import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import CardWork from './ui-components/CardWork';
import Timeline from './ui-components/Timeline';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: this.props.match.params.value,
            works: [{ color: "primary", category: "Backend", title: "Default", date: "2022-06-09", text: "AAAA", id: "1" }, { color: "primary", category: "Backend", title: "Default", date: "2022-06-09", text: "AAAA", id: "2" }],
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        var works = this.state.works
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-left'>
                        <div className="col-4 pt-0">
                            <p className="text-left text-info">{`Search result for : ${this.state.searchValue}`}</p>
                        </div>
                    </div>
                </div>
                {works.map((w) => (
                    <CardWork color={w.color} category={w.category} title={w.title} date={w.date} text={w.text} id={w.id} />
                ))}
            </div>
        );
    }
}
