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
            chartDaily: {
                column1: [],
                column1Show: [],
                column2: [],
                column2Show: [],
                axis: [],
                axisShow: [],
            },
            chartTopBrowse: {
                column1: [],
                column1Show: [],
                axis: [],
                axisShow: [],

            },
            chartTopComment: {
                column1: [],
                column1Show: [],
                axis: [],
                axisShow: [],
            },
        }
        this.getChartData = this.getChartData.bind(this)
        //Edit comments array

    }

    componentDidMount() {
        //To retrive comments
        this.getChartData()
        // this.renderChart()
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
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/statistic/get`, requestOptions)
            .then((response) => {
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
            })
            .then((json) => {
                console.log(json)
                let dailyBrowse = []
                let dailyBrowseAxis = []
                let dailyComment = []
                let dailyCommentAxis = []
                json.data.daily_browse.forEach(r => {
                    dailyBrowse.push(r.count)
                    let stringDate = String(r.date)
                    let formatDate = stringDate.slice(0, 4) + "-" + stringDate.slice(4, 6) + "-" + stringDate.slice(-2) //20220905
                    dailyBrowseAxis.push(String(formatDate))
                });
                json.data.daily_comment.forEach(r => {
                    dailyComment.push(r.count)
                    let stringDate = String(r.date)
                    let formatDate = stringDate.slice(0, 4) + "-" + stringDate.slice(4, 6) + "-" + stringDate.slice(-2) //20220905
                    dailyCommentAxis.push(String(formatDate))
                });
                let topBrowseArticle = []
                let topBrowseArticleAxis = []
                let topCommentArticle = []
                let topCommentArticleAxis = []
                json.data.top_browse_works.forEach(r => {
                    topBrowseArticle.push(r.count)
                    topBrowseArticleAxis.push(r.title)
                });
                json.data.top_comment_works.forEach(r => {
                    topCommentArticle.push(r.count)
                    topCommentArticleAxis.push(r.title)
                });
                if (dailyBrowseAxis.length > 7) {
                    this.setState({
                        chartDaily: {
                            column1: dailyBrowse,
                            column1Show: ["Browse"].concat(dailyBrowse.slice(-7)),
                            column2: dailyComment,
                            column2Show: ["Comment"].concat(dailyComment.slice(-7)),
                            axis: dailyBrowseAxis,
                            axisShow: dailyBrowseAxis.slice(-7),
                        },
                        chartTopBrowse: {
                            column1: topBrowseArticle,
                            column1Show: ["Browse"].concat(topBrowseArticle.slice(0, 5)),
                            axis: topBrowseArticleAxis,
                            axisShow: topBrowseArticleAxis.slice(0, 5),
                        },
                        chartTopComment: {
                            column1: topCommentArticle,
                            column1Show: ["Comment"].concat(topCommentArticle.slice(0, 5)),
                            axis: topCommentArticleAxis,
                            axisShow: topCommentArticleAxis.slice(0, 5),

                        },
                        isLoaded: true,
                    },
                        () => {
                            this.renderChart()
                        })

                } else {
                    this.setState({
                        chartDaily: {
                            column1: dailyBrowse,
                            column1Show: ["Browse"].concat(dailyBrowse),
                            column2: dailyComment,
                            column2Show: ["Comment"].concat(dailyComment),
                            axis: dailyBrowseAxis,
                            axisShow: dailyBrowseAxis,
                        },
                        chartTopBrowse: {
                            column1: topBrowseArticle,
                            column1Show: ["Browse"].concat(topBrowseArticle.slice(0, 5)),
                            axis: topBrowseArticleAxis,
                            axisShow: topBrowseArticleAxis.slice(0, 5),
                        },
                        chartTopComment: {
                            column1: topCommentArticle,
                            column1Show: ["Comment"].concat(topCommentArticle.slice(0, 5)),
                            axis: topCommentArticleAxis,
                            axisShow: topCommentArticleAxis.slice(0, 5),

                        },
                        isLoaded: true,
                    },
                        () => {
                            this.renderChart()
                        })
                }

            })
    }

    renderChart() {
        console.log("RENDER CHART ", [this.state.chartDaily.column1Show, this.state.chartDaily.column2Show])
        console.log("RENDER CHART ", this.state.chartDaily.axisShow)
        c3.generate({
            bindto: "#chart1",

            data: {
                x: 'x',
                columns: [['x'].concat(this.state.chartDaily.axisShow), this.state.chartDaily.column1Show, this.state.chartDaily.column2Show],
            },
            axis: {
                x: {
                    label: {
                        text: 'Date',
                        position: 'outer-center',
                    },
                    type: 'timeseries',
                    categories: this.state.chartDaily.axisShow,

                },
                y: {
                    label: {
                        text: 'Times',
                        position: 'outer-middle'
                    },
                    min: 0,
                    padding: {
                        top: 0,
                        bottom: 0
                    }
                }
            },
        });
        c3.generate({
            bindto: "#chart2",
            data: {
                columns: [
                    this.state.chartTopBrowse.column1Show
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    label: {
                        text: '',
                        position: 'outer-center',
                    },
                    type: 'category',
                    categories: this.state.chartTopBrowse.axisShow,
                    tick: {
                        centered: true
                    }
                },
                y: {
                    label: {
                        text: 'Times',
                        position: 'outer-middle'
                    },
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
                    this.state.chartTopComment.column1Show
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    label: {
                        text: '',
                        position: 'outer-center',
                    },
                    type: 'category',
                    categories: this.state.chartTopComment.axisShow,
                    tick: {
                        centered: true
                    }
                },
                y: {
                    label: {
                        text: 'Times',
                        position: 'outer-middle'
                    },
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
        console.log(this.state)
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
                                        <div className='card fadeIn box-shadow p-2'>
                                            <p className="text-dark" href="#">Browse and comment table</p>
                                            <div id="chart1"></div>
                                            <div class="d-flex justify-content-end">
                                                <div className="btn btn-outline-secondary m-1" onClick={() => { }}>&#8249;</div>
                                                <div className="btn btn-outline-secondary m-1" onClick={() => { }}>&#8250;</div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6 p-2'>
                                        <div className='card fadeIn box-shadow p-2'>
                                            <p className="text-dark" href="#">Most browse articles</p>
                                            <div id="chart2"></div>
                                            <div class="d-flex justify-content-center">
                                                <div className="btn btn-outline-secondary m-1" onClick={() => { }}>&#8249;</div>
                                                <div className="btn btn-outline-secondary m-1" onClick={() => { }}>&#8250;</div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className='col-6 p-2'>
                                        <div className='card fadeIn box-shadow p-2'>
                                            <p className="text-dark" href="#">Most comment articles</p>
                                            <div id="chart3"></div>
                                            <div class="d-flex justify-content-center">
                                                <div className="btn btn-outline-secondary m-1" onClick={() => { }}>&#8249;</div>
                                                <div className="btn btn-outline-secondary m-1" onClick={() => { }}>&#8250;</div>
                                            </div>
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