import React, { Component } from 'react';
import CardWork from './ui-components/CardWork';
import ReactLoading from 'react-loading';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: this.props.match.params.value,
            works: [{ color: "primary", category: "Backend", title: "Default", year: "2022", text: "AAAA", id: "1" }, { color: "primary", category: "Backend", title: "Default", year: "2022", text: "AAAA", id: "2" }],
            isLoaded: true,
            error: null,
            errors: [],
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        let { works, isLoaded, error } = this.state
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            return <div>
                <div className='container'>
                    <div className='row align-items-left'>
                        <div className="col-4 pt-0">
                            <p className="text-left text-info">{`Search result for : ${this.state.searchValue}`}</p>
                        </div>
                    </div>

                </div>
                <div className='container'>
                    <div className="align-items-center text-center row d-flex justify-content-center mt-5">
                        <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={100} width={100} />
                    </div>
                    <div className="align-items-center text-center row d-flex justify-content-center">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>

        }
        return (
            <div>
                <div className='container'>
                    <div className='row align-items-left'>
                        <div className="col-4 pt-0">
                            <p className="text-left text-info">{`Search result for : ${this.state.searchValue}`}</p>
                        </div>
                    </div>

                </div>
                <div className='container'>
                    {works.map((w) => (
                        <div className='row'>
                            <CardWork color={w.color} category={w.category} title={w.title} date={w.year} text={w.text} id={w.id} />
                        </div>

                    ))}
                </div>
            </div>
        );
    }
}
