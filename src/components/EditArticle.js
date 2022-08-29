import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Sidebar from './ui-components/Sidebar';
import ReactLoading from 'react-loading';
import './Manage.css'
import './EditArticle.css'

export default class EditArticle extends Component {
    state = {
        work: {},
        isLoaded: false,
        isManager: false,
        error: null,
    }

    constructor(props) {
        super(props)
        this.state = {
            work: {
                id: 0,
                title: "",
                category: "",
                text: "",
                tools: "",
                year: "",
                downloadlink: "",
                pictureone: "",
                picturetwo: "",
                picturethree: "",
                picturefour: "",
                picturefive: "",
            },
            API_IP: this.props.API_IP,
            isLoaded: false,
            edited: false,
            deleting: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            alert: {
                type: "d-done",
                message: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getWork = this.getWork.bind(this)
    }

    componentDidMount() {
        //To retrive work
        let id = Number(this.props.match.params.id)
        if (id != undefined) {
            this.setState({
                work: {
                    id: id,
                    title: "",
                    category: "",
                    text: "",
                    tools: "",
                    year: "",
                    downloadlink: "",
                    pictureone: "",
                    picturetwo: "",
                    picturethree: "",
                    picturefour: "",
                    picturefive: "",
                },
            })
            this.getWork(id)
        }
        this.setState({
            isLoaded: true,
        })

    }
    getWork = (id) => {
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        myHeaders.append("token", this.props.jwt)
        const payload = {
            id: id,
        }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/work/show`, requestOptions)
            .then((response) => {
                console.log("RESPONSE", response)
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
            })
            .then((json) => {
                console.log("RESPONSE", json)
                console.log("RESPONSE", json.data)
                console.log("RESPONSE", json.data.work)
                this.setState({
                    work: json.data.work,
                    isLoaded: true,
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    })
            })
    }

    handleChange = (evt) => {
        let value = evt.target.value
        let name = evt.target.name
        this.setState((preState) => ({
            work: {
                ...preState.work,
                [name]: value,
            }
        }))
    }

    handleSubmit = (evt) => {
        console.log('submit')
        evt.preventDefault()
        // client side validation
        let errors = []
        if (this.state.work.title == "") {
            errors.push("title")
        }
        if (this.state.work.category == "") {
            errors.push("category")
        }
        if (this.state.work.text == "") {
            errors.push("text")
        }
        if (this.state.work.tools == "") {
            errors.push("tools")
        }
        if (this.state.work.year == "") {
            errors.push("year")
        }
        if (this.state.work.downloadlink == "") {
            errors.push("downloadlink")
        }
        if (this.state.work.pictureone == "") {
            errors.push("pictureone")
        }
        if (this.state.work.picturetwo == "") {
            errors.push("picturetwo")
        }
        if (this.state.work.picturethree == "") {
            errors.push("picturethree")
        }
        if (this.state.work.picturefour == "") {
            errors.push("picturefour")
        }
        if (this.state.work.picturefive == "") {
            errors.push("picturefive")
        }
        this.setState({ errors: errors })
        if (errors.length > 0) {
            return false
        }
        // we passed, so post info
        const data = new FormData(evt.target)
        const payload = Object.fromEntries(data.entries())
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        myHeaders.append("token", this.props.jwt)
        payload["id"] = this.state.work.id
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


    confirmDelete = (e) => {
        e.preventDefault()
        confirmAlert({
            title: "Delete Article",
            message: "Are you sure?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.setState({ deleting: true, })
                        let myHeaders = new Headers()
                        myHeaders.append("Content-Type", "application/json")
                        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
                        myHeaders.append("token", this.props.jwt)
                        const payload = {
                            id: this.state.work.id,
                        }

                        const requestOptions = {
                            method: "POST",
                            body: JSON.stringify(payload),
                            headers: myHeaders,
                        }
                        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/work/delete`, requestOptions)
                            .then((response) => {
                                console.log("RESPONSE", response)
                                if (response.status != "200") {
                                    let err = Error
                                    err.message = "Invalid response code: " + response.status
                                    this.setState({
                                        error: err,
                                        deleting: false
                                    })
                                    return
                                }
                                this.deletedAlert()
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        })
    }

    deletedAlert = (e) => {

        confirmAlert({
            title: "Article deleted",
            message: "",
            buttons: [
                {
                    label: 'Back to list',
                    onClick: () => {
                        console.log("BACK TO LIST")
                        window.history.go(-1);
                    }
                },
            ]
        })
    }

    createdAlert = (e) => {

        confirmAlert({
            title: "Article created",
            message: "",
            buttons: [
                {
                    label: 'Back to list',
                    onClick: () => {
                        window.history.go(-1);
                    }
                },
            ]
        })
    }

    savedAlert = (e) => {

        confirmAlert({
            title: "Article saved",
            message: "",
            buttons: [
                {
                    label: 'Back to list',
                    onClick: () => {
                        window.history.go(-1);
                    }
                },
                {
                    label: 'Stay',
                    onClick: () => {

                    }
                },
            ]
        })
    }

    render() {
        let { work, isLoaded, error, isManager, errors, edited, deleting } = this.state
        let errorMessage
        if (errors.length > 0) {
            let errorMessageText = errors.join()
            errorMessage = <div className='' style={{ color: 'red' }}>{`Error: ${errorMessageText} is blank!`}</div>
        }
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isManager) {
            console.log("push to index")
            this.props.history.push({
                pathname: "/",
            })

        } else if (!isLoaded) {
            return <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Comments</h1>
                            </div>
                            <div className="align-items-center text-center row d-flex justify-content-center mt-5">
                                <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={100} width={100} />
                            </div>
                            <div className="align-items-center text-center row d-flex justify-content-center">
                                <p>Loading...</p>
                            </div>
                        </main>
                    </div>
                </div >

            </div >

        }
        return (
            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Edit Article</h1>
                            </div>
                            {errorMessage}



                            <form onSubmit={this.handleSubmit} className='text-left mb-10'>
                                <div className='form-group text-left'>
                                    <label htmlFor='title' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Title
                                    </label>
                                    <input type='text' className='form-control text-left' id="title" name='title' value={this.state.work.title} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='category' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Category
                                    </label>
                                    <input type='text' className='form-control text-left' id="category" name='category' value={this.state.work.category} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='tools' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Tools
                                    </label>
                                    <input type='text' className='form-control text-left' id="tools" name='tools' value={this.state.work.tools} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='year' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Year
                                    </label>
                                    <input type='text' className='form-control text-left' id="year" name='year' value={this.state.work.year} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='downloadlink' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Download Link
                                    </label>
                                    <input type='text' className='form-control text-left' id="downloadlink" name='downloadlink' value={this.state.work.downloadlink} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='pictureone' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Picture 1
                                    </label>
                                    <input type='text' className='form-control text-left' id="pictureone" name='pictureone' value={this.state.work.pictureone} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='picturetwo' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Picture 2
                                    </label>
                                    <input type='text' className='form-control text-left' id="picturetwo" name='picturetwo' value={this.state.work.picturetwo} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='picturethree' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Picture 3
                                    </label>
                                    <input type='text' className='form-control text-left' id="picturethree" name='picturethree' value={this.state.work.picturethree} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='picturefour' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Picture 4
                                    </label>
                                    <input type='text' className='form-control text-left' id="picturefour" name='picturefour' value={this.state.work.picturefour} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='picturefive' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Picture 5
                                    </label>
                                    <input type='text' className='form-control text-left' id="picturefive" name='picturefive' value={this.state.work.picturefive} onChange={this.handleChange} />
                                </div>
                                <div className='form-group text-left'>
                                    <label htmlFor='text' className='form-label mr-2  ml-2 d-block mb-2'>
                                        Text
                                    </label>
                                    <textarea type='text' className='form-control text-left mx-1' style={{ width: '85%', height: '200px' }} id="text" name='text' value={this.state.work.text} onChange={this.handleChange} />
                                </div>
                                <hr />
                                {edited == true && (
                                    <button className="faded btn btn-primary" type="submit" onClick={(e) => { e.preventDefault() }}>Sent</button>
                                )}
                                {edited == false && (
                                    <button className="btn btn-primary" type="submit">Save</button>
                                )}
                                {/* <a className='btn btn-primary' style={{ color: 'white' }}>Save</a> */}
                                <Link href="/manage/articles" className="btn btn-warning ms-1 ml-1" style={{ color: 'white' }}>Cancel</Link>
                                {work.id > 0 && deleting == false && (
                                    <a href='' onClick={(e) => this.confirmDelete(e)} className='btn btn-danger ms-1 ml-1' style={{ color: 'white' }}>
                                        Delete
                                    </a>
                                )}
                                {deleting == true && (
                                    <a href='' className='btn btn-danger ms-1 ml-1' style={{ color: 'white' }}>
                                        Deleteing...
                                    </a>
                                )}
                            </form>
                            {/* <div className='mt-3' >
                                <pre style={{ color: 'white' }} /> {JSON.stringify(this.state, null, 3)}</pre>
                            </div> */}
                            <div className='mt-3' >
                                <pre style={{ color: 'white', height: "200px" }} >  </pre>
                            </div>
                        </main>
                    </div>
                </div >

            </div >

        );
    }
}
