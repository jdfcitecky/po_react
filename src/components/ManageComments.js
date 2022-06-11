import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Sidebar from './ui-components/Sidebar';
import CommentManage from './ui-components/CommentManage';
import './Manage.css'
export default class ManageComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [{ name: "Default", date: "2022-06-09", text: "AAAA", isnew: "true" }, { name: "Default2", date: "2022-06-09", text: "AAAA", isnew: "false" }],
            isLoaded: true,
            error: null,
            errors: [],
            isManager: this.props.isManager,
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
            return <p>Loading...</p>
        }
        return (

            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 class="h2">Comments</h1>
                            </div>

                            {comments.map((c) => (
                                <CommentManage name={c.name} date={c.date} text={c.text} isnew={c.isnew} />
                            ))}


                        </main>
                    </div>

                </div>
            </div>

        );
    }
}
