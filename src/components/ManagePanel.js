import React, { Component } from 'react';
import Sidebar from './ui-components/Sidebar';
import CommentManage from './ui-components/CommentManage';
import ReactLoading from 'react-loading';
import c3 from 'c3';
import './Manage.css'
import './ManagePanel.css'
export default class ManageComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: [],
            // !!!!!! When API done please set isLoaded false
            isLoaded: true,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            jwt: this.props.jwt,
            alert: {
                type: "d-done",
                message: "",
            },
            chartOne: {
                column1: ['data1', 30, 200, 100, 400, 150, 250],
                column2: ['data2', 50, 20, 10, 40, 15, 25],
            },
            chartTwo: {
                column1: ['data1', 30, 200, 100, 400, 150, 250],

            },
            chartThree: {
                column1: ['data1', 30, 200, 100, 400, 150, 250],

            },
        }
        this.getChartData = this.getChartData.bind(this)
        //Edit comments array

    }

    componentDidMount() {
        //To retrive comments
        this.getChartData()
        this.renderChart()
    }

    componentDidUpdate() {
        this.renderChart()
    }

    getChartData = () => {
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
        // fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/comment/list`, requestOptions)
        //     .then((response) => {
        //         if (response.status != "200") {
        //             let err = Error
        //             err.message = "Invalid response code: " + response.status
        //             this.setState({ error: err })
        //         }
        //         return response.json()
        //     })
        //     .then((json) => {
        //         this.setState({
        //             comments: this.state.comments.concat(json["data"]),
        //             maxPage: json["data"].length,
        //             isLoaded: true,
        //         },
        //             (error) => {
        //                 this.setState({
        //                     isLoaded: true,
        //                     error
        //                 })
        //             })
        //     })
    }

    renderChart() {
        c3.generate({
            bindto: "#chart1",
            data: {
                columns: [this.state.chartOne.column1, this.state.chartOne.column2],
            },
        });
        c3.generate({
            bindto: "#chart2",
            data: {
                columns: [
                    ['rainfall', 6, 8, 6, 5, 4]
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    label: {
                        text: 'States',
                        position: 'outer-center',
                    },
                    type: 'category',
                    categories: ['MA', 'ME', 'NY', 'CN', 'TX'],
                    tick: {
                        centered: true
                    }
                },
                y: {
                    label: {
                        text: 'Rainfall (inches)',
                        position: 'outer-middle'
                    },
                    max: 10,
                    min: 0,
                    padding: {
                        top: 0,
                        bottom: 0
                    }
                }
            },
            legend: {
                show: false
            }
        });

        c3.generate({
            bindto: "#chart3",
            data: {
                columns: [
                    ['rainfall', 6, 8, 6, 5, 4]
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    label: {
                        text: 'States',
                        position: 'outer-center',
                    },
                    type: 'category',
                    categories: ['MA', 'ME', 'NY', 'CN', 'TX'],
                    tick: {
                        centered: true
                    }
                },
                y: {
                    label: {
                        text: 'Rainfall (inches)',
                        position: 'outer-middle'
                    },
                    max: 10,
                    min: 0,
                    padding: {
                        top: 0,
                        bottom: 0
                    }
                }
            },
            legend: {
                show: false
            }
        });
    }

    render() {
        let { chartData, isLoaded, error, isManager } = this.state
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
                                <h1 className="h2">Statistical panel</h1>
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
                                <h1 className="h2">Statistical panel</h1>
                            </div>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 p-2'>
                                        <div className='card fadeIn box-shadow'>
                                            <p className="text-dark" href="#">Browse and comment table</p>
                                            <div id="chart1"></div>
                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6 p-2'>
                                        <div className='card fadeIn box-shadow p-2'>
                                            <p className="text-dark" href="#">Most browse articles</p>
                                            <div id="chart2"></div>
                                        </div>

                                    </div>
                                    <div className='col-6 p-2'>
                                        <div className='card fadeIn box-shadow p-2'>
                                            <p className="text-dark" href="#">Most comment articles</p>
                                            <div id="chart3"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </main>
                    </div>

                </div>
            </div>

        );
    }
}