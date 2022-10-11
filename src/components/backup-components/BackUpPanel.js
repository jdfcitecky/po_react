// this will be backup panel
import React, { Component } from 'react';
import Sidebar from '../ui-components/Sidebar';
import "./BackUpPanel.css"
import { MessageCircle, X, ChevronsRight } from 'react-feather';
export default class BackUpPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [{
                id: -1,
                title: "Title",
                text: "default text default text default text default text default text default text default text default text",
                tools: "python, mysql, golang, javascript",
                year: "2020",
                downloadlink: "#",
                pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup`,
                picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup`,
                picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup`,
                picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup`,
                picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup`,

            },],
            isLoaded: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            jwt: this.props.jwt,
            alert: {
                type: "d-done",
                message: "",
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //To retrive comments
        // this.getComments()
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        // we passed, so post info
        const data = new FormData(evt.target)
        const payload = Object.fromEntries(data.entries())
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        myHeaders.append("token", this.props.jwt)
        payload["id"] = this.state.work.id
        payload["tags"] = (this.state.work.category + " " + this.state.work.tools).toLowerCase()
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        fetch(`http://${this.state.API_IP}/admin/work/save`, requestOptions)
            .then((response) => {
                response.json()
                this.setState({ edited: true, })
                setTimeout(() => {
                    this.setState({
                        edited: false,
                    })
                }, 3000);
                if (this.state.work.id == 0) {
                    this.createdAlert()
                } else {
                    this.savedAlert()
                }
            })
    }




    render() {
        let { works, error, isManager } = this.state
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isManager) {
            console.log("push to index")
            this.props.history.push({
                pathname: "/",
            })

        }
        return (

            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Backup</h1>
                            </div>

                            {works.map((w) => (
                                <div>{w.title}</div>
                            ))}


                        </main>
                    </div>

                </div>
            </div>

        );
    }
}