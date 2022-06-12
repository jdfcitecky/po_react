import React, { Component } from 'react';
import Sidebar from './ui-components/Sidebar';
import CommentManage from './ui-components/CommentManage';
import ReactLoading from 'react-loading';
import './Manage.css'
export default class ManageComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [{ name: "Default", date: "2022-06-09", text: "AAAA", isnew: "true", id: "1" }, { name: "Default2", date: "2022-06-09", text: "AAAA", isnew: "false", id: "2" }, { name: "Default", date: "2022-06-09", text: "AAAA", isnew: "true", id: "3" }],
            isLoaded: true,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            jwt: this.props.jwt,
            alert: {
                type: "d-done",
                message: "",
            }
        }
    }
    render() {
        let { comments, isLoaded, error, isManager } = this.state
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

                </div>
            </div>

        }
        return (

            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Comments</h1>
                            </div>

                            {comments.map((c) => (
                                <CommentManage name={c.name} date={c.date} text={c.text} isnew={c.isnew} jwt={this.state.jwt} id={c.id} />
                            ))}


                        </main>
                    </div>

                </div>
            </div>

        );
    }
}
