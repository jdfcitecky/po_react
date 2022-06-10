import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Sidebar from './ui-components/Sidebar';
import CardManage from './ui-components/CardManage';
import './Manage.css'
export default class ManageArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [{ color: "primary", category: "Backend", title: "Default", date: "2022-06-09", text: "AAAA", id: "1" }, { color: "primary", category: "Backend", title: "Default", date: "2022-06-09", text: "AAAA", id: "2" }],
        }
    }
    render() {
        var works = this.state.works
        return (

            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 class="h2">Articles</h1>
                            </div>

                            {works.map((w) => (
                                <div className='row'>
                                    <CardManage color={w.color} category={w.category} title={w.title} date={w.date} text={w.text} id={w.id} />
                                </div>

                            ))}


                        </main>
                    </div>

                </div>
            </div>

        );
    }
}
