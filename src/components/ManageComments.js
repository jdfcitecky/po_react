import React, { Component } from 'react';
import Sidebar from './ui-components/Sidebar';
import CommentManage from './ui-components/CommentManage';
import ReactLoading from 'react-loading';
import './Manage.css'
export default class ManageComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            isLoaded: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            jwt: this.props.jwt,
            alert: {
                type: "d-done",
                message: "",
            },
            category: "All",
            pageStart: 0,
            pageLimit: 3,
            maxPage: 0,
            // For pagination
            pageTags: [1],
            maxRecordsNumber: 1,
            numberOfRecordsInPage: 3,
            currentPage: 1,
            maxPageForP: 3,
            enableClick: true,
        }
        this.getComments = this.getComments.bind(this)
        // this.handleCategory = this.handleCategory.bind(this)
        // this.handlePageStart = this.handlePageStart.bind(this)
    }

    componentDidMount() {
        //To retrive works
        this.getComments()
    }
    getComments = () => {
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Authorization", "Bearer " + this.props.jwt)
        myHeaders.append("token", this.props.jwt)
        const payload = {
            work_id: 0,
        }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: myHeaders,
        }
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/comment/list`, requestOptions)
            .then((response) => {
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
            })
            .then((json) => {
                this.setState({
                    comments: this.state.comments.concat(json["data"]),
                    maxPage: json["data"].length,
                    isLoaded: true,
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    })
                // this.handleCategory("All")
            })
    }


    render() {
        let { comments, isLoaded, error, isManager } = this.state
        console.log("COMMENT LIST", comments)
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isManager) {
            console.log("push to index")
            this.props.history.push({
                pathname: "/",
            })

        } else if (!isLoaded) {
            return <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
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

                </div>
            </div>

        }
        return (

            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Comments</h1>
                            </div>

                            {comments.map((c) => (
                                <CommentManage name={c.member_name} date={c.updated_at} text={c.text} isnew={c.is_new} jwt={this.state.jwt} id={c.member_id} />
                            ))}


                        </main>
                    </div>

                </div>
            </div>

        );
    }
}
