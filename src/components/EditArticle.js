import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Sidebar from './ui-components/Sidebar';
import Select from 'react-select'
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
            uploadClass: "uploadZone",
            uploading: false,
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
        console.log(id)
        if (id !== NaN) {
            console.log("set state at mounted")
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
        console.log("changed")
        console.log(this.state.work)
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
            return
        }
        if (this.state.work.category == "") {
            errors.push("category")
            return
        }
        if (this.state.work.category == "Choose...") {
            errors.push("category")
            return
        }
        if (this.state.work.text == "") {
            errors.push("text")
            return
        }
        if (this.state.work.tools == "") {
            errors.push("tools")
            return
        }
        if (this.state.work.year == "") {
            errors.push("year")
            return
        }
        if (this.state.work.downloadlink == "") {
            errors.push("downloadlink")
            return
        }
        if (this.state.work.pictureone == "") {
            errors.push("pictureone")
            return
        }
        if (this.state.work.picturetwo == "") {
            errors.push("picturetwo")
            return
        }
        if (this.state.work.picturethree == "") {
            errors.push("picturethree")
            return
        }
        if (this.state.work.picturefour == "") {
            errors.push("picturefour")
            return
        }
        if (this.state.work.picturefive == "") {
            errors.push("picturefive")
            return
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

    //For uplaod
    handleUploadDragEnter = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("drag enter")
        this.setState({
            uploadClass: "uploadZone-highlight"
        })
    }

    handleUploadDrop = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("drop")
        this.setState({
            uploadClass: "uploadZone"
        })
        let dt = e.dataTransfer;
        console.log(dt)
        let file = dt.files[0]; // Get file
        console.log(file)
        this.uploadFile(file)
    }

    handleUploadDragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("drag over")
        this.setState({
            uploadClass: "uploadZone-highlight"
        })
    }

    handleUploadDragLeave = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("drag over")
        this.setState({
            uploadClass: "uploadZone"
        })
    }

    uploadFile = (file) => {
        const formData = new FormData()
        formData.append("file", file)
        // check file type
        if (!['image/jpeg', 'image/gif', 'image/png', 'image/svg+xml'].includes(file.type)) {
            console.log('Only images are allowed.');
            return;
        }
        // check file size (< 2MB)
        if (file.size > 2 * 1024 * 1024) {
            console.log('File must be less than 2MB.');
            return;
        }
        // POST to backend
        this.setState({ uploading: true, })
        let myHeaders = new Headers()
        // myHeaders.append("Content-Type", 'multipart/form-data')
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        myHeaders.append("token", this.props.jwt)
        const requestOptions = {
            method: "POST",
            body: formData,
            headers: myHeaders,
        }
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/upload`, requestOptions)
            .then((response) => {
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({
                        error: err,
                        deleting: false
                    })
                    return
                }
                console.log(response)
                console.log(response.json)
                this.setState({ uploading: false, })
            })
    }
    // Render

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
                                    {/* <label htmlFor='category' className='form-label mr-2  ml-2 d-block mb-0'>
                                        Category
                                    </label>
                                    <input type='text' className='form-control text-left' id="category" name='category' value={this.state.work.category} onChange={this.handleChange} /> */}
                                    <label className="form-label mr-2  ml-2 d-block mb-0" htmlFor="category">Category</label>
                                    <select className="form-control text-left categorySelect" id="category" name='category' value={this.state.work.category} onChange={this.handleChange}>
                                        <option value="Choose...">Choose...</option>
                                        <option value="Backend">Backend</option>
                                        <option value="Frontend">Frontend</option>
                                        <option value="M.S Project">M.S Project</option>
                                        <option value="Design">Design</option>
                                    </select>
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
                                    <div className='d-flex flex-row'>
                                        <div className={this.state.uploadClass} onDragEnter={(e) => { this.handleUploadDragEnter(e) }} onDrop={(e) => { this.handleUploadDrop(e) }} onDragLeave={(e) => { this.handleUploadDragLeave(e) }} onDragOver={(e) => { this.handleUploadDragOver(e) }}>Put image here</div>
                                        {this.state.work.pictureone != "" && (
                                            <div className='previewZone'><img src={this.state.work.pictureone} /></div>
                                        )}
                                    </div>

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
