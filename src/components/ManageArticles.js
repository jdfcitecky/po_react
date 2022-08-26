import React, { Component } from 'react';
import Sidebar from './ui-components/Sidebar';
import CardManage from './ui-components/CardManage';
import Pagination from './ui-components/Pagination';
import ReactLoading from 'react-loading';
import './Manage.css'
export default class ManageArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [],
            worksMain: [],
            worksShow: [],
            isLoaded: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            alert: {
                type: "d-done",
                message: "",
            },
            category: "All",
            pageStart: 0,
            pageLimit: 5,
            maxPage: 0,
        }
        this.getWorks = this.getWorks.bind(this)
        this.colorAssign = this.colorAssign.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handlePageStart = this.handlePageStart.bind(this)
    }
    componentDidMount() {
        //To retrive works
        this.getWorks()
    }
    getWorks = () => {
        var myHeaders = new Headers()
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
        console.log("Gettttt works")
        console.log(payload)
        fetch(`http://${process.env.REACT_APP_API_ADDRESS}/admin/work/list`, requestOptions)
            .then((response) => {
                console.log("Status code is", response.status)
                if (response.status != "200") {
                    let err = Error
                    err.message = "Invalid response code: " + response.status
                    this.setState({ error: err })
                }
                return response.json()
            })
            .then((json) => {
                this.setState({
                    worksMain: this.state.works.concat(json["data"]).map(work => this.colorAssign(work)),
                    works: this.state.works.concat(json["data"]).map(work => this.colorAssign(work)),
                    maxPage: json["data"].length,
                    isLoaded: true,
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    })
                this.handleCategory("All")
            })
    }
    colorAssign = (work) => {
        switch (work.category) {
            case "Backend":
                work["color"] = "primary"
                break;
            case "Frontend":
                work["color"] = "success"
                break;
            case "Design":
                work["color"] = "warning"
                break;
            case "M.S Project":
                work["color"] = "info"
                break;
            default:
                work["color"] = "secondary"
                break;
        }
        return work

    }
    handlePageStart = (page) => {
        console.log("pwpwpwpw", page, page + this.state.pageLimit, this.state.maxPage)
        if (page + this.state.pageLimit > this.state.maxPage) {
            console.log("pwpwpwpw", page, page + this.state.pageLimit, this.state.maxPage)
            this.setState({
                pageStart: this.state.maxPage,
                worksShow: this.state.worksMain.slice(page, this.state.pageLimit - page),
            })
        } else {
            this.setState({
                pageStart: page,
                worksShow: this.state.worksMain.slice(page, this.state.pageLimit),
            })
        }
    }

    handleCategory = (category) => {
        console.log(category)
        if (category == "All") {
            this.setState({
                category: category,
                worksMain: this.state.works,
                maxPage: this.state.works.length,
            })
        } else {
            let newWorksMain = this.state.works.filter(w => w.category == category)
            this.setState({
                category: category,
                worksMain: newWorksMain,
                maxPage: newWorksMain.length,
            })

        }
        this.handlePageStart(0)

    }
    render() {
        let { works, isLoaded, error, isManager, pageStart, pageLimit, maxPage, worksShow } = this.state
        console.log(maxPage)
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
                                <h1 className="h2">Articles</h1>
                                <div className='d-flex justify-content-between'>
                                    <div className='py-3'>
                                        <select onChange={(e) => { this.handleCategory(e.target.value) }}>
                                            <option value="All">All</option>
                                            <option value="Backend">Backend</option>
                                            <option value="Frontend">Frontend</option>
                                            <option value="M.S Project">M.S Project</option>
                                            <option value="Design">Design</option>
                                        </select>
                                    </div>

                                    <Pagination className="pt-3 ml-2" maxPageNumber={this.state.worksMain.length} numberOfRecordsinPage={this.state.pageLimit} handlePageStart={this.handlePageStart} />


                                </div>


                            </div>

                            {worksShow.map((w) => (
                                <div className='row'>
                                    <CardManage key={w.id} color={w.color} category={w.category} title={w.title} date={w.date} text={w.text} id={w.id} />
                                </div>

                            ))}


                        </main>
                    </div>

                </div >
            </div >

        );
    }
}
