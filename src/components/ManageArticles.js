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
            worksMainLen: 0,
            worksShow: [],
            A: [1, 2, 3],
            isLoaded: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            alert: {
                type: "d-done",
                message: "",
            },

            pageTags: [1],
            maxRecordsNumber: 1,
            numberOfRecordsInPage: 1,
            currentPage: 1,
            maxPageForP: 1,

            category: "All",
            pageStart: 0,
            pageLimit: 1,
            maxPage: 0,
        }
        this.getWorks = this.getWorks.bind(this)
        this.colorAssign = this.colorAssign.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handlePageStart = this.handlePageStart.bind(this)
        // For pagination
        this.transformPageStart = this.transformPageStart.bind(this)
        this.calculateMaxPage = this.calculateMaxPage.bind(this)
        this.handlePreviousClick = this.handlePreviousClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleTagClick = this.handleTagClick.bind(this)
        this.handlePageTags = this.handlePageTags.bind(this)
        this.cleanTagSet = this.cleanTagSet.bind(this)
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
    handlePageStart = (pageStart, maxPage, worksWithCategory) => {
        console.log("pwpwpwpw", pageStart, pageStart + this.state.pageLimit, maxPage)
        if (pageStart + this.state.pageLimit > maxPage) {
            console.log("pwpwpwpw1", pageStart, pageStart + this.state.pageLimit, maxPage)
            this.setState({
                pageStart: maxPage,
                worksShow: worksWithCategory.slice(pageStart, this.state.pageLimit - pageStart),
            })
        } else {
            console.log("pwpwpwpw2", pageStart, pageStart + this.state.pageLimit, maxPage)
            this.setState({
                pageStart: pageStart,
                worksShow: worksWithCategory.slice(pageStart, this.state.pageLimit),
            })
        }
    }

    handleCategory = (cate) => {
        let newWorksMain = []
        if (cate == "All") {
            newWorksMain = this.state.works
            this.setState({
                category: cate,
                worksMain: newWorksMain,
                worksMainLen: newWorksMain.length,
                maxPageForP: this.calculateMaxPage(newWorksMain.length, this.state.pageLimit),

            })
        } else {
            newWorksMain = this.state.works.filter(w => w.category == cate)
            this.setState({
                category: cate,
                worksMain: newWorksMain,
                worksMainLen: newWorksMain.length,
                maxPageForP: this.calculateMaxPage(newWorksMain.length, this.state.pageLimit),
            })
        }
        this.handlePageStart(0, newWorksMain.length, newWorksMain)
        this.handlePageTags(1)

    }
    //For pagination
    calculateMaxPage = (maxRecordsNumber, numberOfRecordsinPage) => {
        if (maxRecordsNumber < numberOfRecordsinPage) {
            return 1
        }

        if (maxRecordsNumber % numberOfRecordsinPage == 0) {
            return Math.floor(maxRecordsNumber / numberOfRecordsinPage)
        }

        return Math.ceil(maxRecordsNumber / numberOfRecordsinPage)
    }

    transformPageStart = (page) => {
        if (page > this.state.maxRecordsNumber) {
            page = this.state.maxRecordsNumber
        }
        if (page < 0) {
            page = 0
        }
        this.handlePageStart(page, this.state.worksMain.length, this.state.worksMain)
    }

    handlePreviousClick = () => {
        console.log("previous in")
        let newCurrentPage = this.state.currentPage - 1
        if (newCurrentPage < 1) {
            return
        }
        this.setState({
            currentPage: newCurrentPage,
        })
        console.log("previous new page", newCurrentPage)
        this.handlePageTags(newCurrentPage)
        console.log("previous handle tags", newCurrentPage)
        this.transformPageStart(0 + this.state.numberOfRecordsInPage * (newCurrentPage - 1))
        console.log("previous handle page view", newCurrentPage)
    }

    handleNextClick = () => {
        let newCurrentPage = this.state.currentPage + 1
        if (newCurrentPage > this.state.maxPageForP) {
            return
        }
        this.setState({
            currentPage: newCurrentPage,
        })
        this.handlePageTags(newCurrentPage)
        this.transformPageStart(0 + this.state.numberOfRecordsInPage * (newCurrentPage - 1))
    }

    handleTagClick = (e) => {
        let newCurrentPage = e.value
        if (newCurrentPage > this.state.maxPageForP) {
            return
        }
        if (newCurrentPage < 1) {
            return
        }
        this.setState({
            currentPage: newCurrentPage,
        })
        this.handlePageTags(newCurrentPage)
        this.transformPageStart(0 + this.state.numberOfRecordsinPage * (newCurrentPage - 1))
    }

    handlePageTags = (currentPage) => {

        let newTags = []
        newTags.push(this.state.maxPageForP)
        newTags.push(1)
        newTags.push(currentPage)
        if (currentPage - 1 > 1) {
            newTags.push(currentPage - 1)
        }
        if (currentPage + 1 < this.state.maxPageForP) {
            newTags.push(currentPage + 1)
        }
        newTags.concat(this.state.pageTags)
        let tagSet = newTags.filter((item, index) => newTags.indexOf(item) === index).sort()
        if (currentPage - 2 >= 2) {

            var arrf = tagSet.slice(0, 1)
            console.log(arrf)
            arrf.push("...")
            console.log(arrf)
            var arrb = tagSet.slice(1, tagSet.length)
            console.log(arrb)
            tagSet = arrf.concat(arrb)
        }
        if (currentPage + 2 < this.state.maxPageForP) {
            var arrf = tagSet.slice(0, tagSet.length - 1)
            arrf.push("...")
            var arrb = tagSet.slice(-1)
            tagSet = arrf.concat(arrb)

        }
        this.setState({
            pageTags: tagSet
        })
    }

    cleanTagSet = (arr, value) => {
        var i = 0;
        while (i < arr.length) {
            if (arr[i] === value) {
                arr.splice(i, 1);
            } else {
                ++i;
            }
        }
        return arr;
    }


    render() {
        let { works, isLoaded, error, isManager, pageStart, pageLimit, worksShow, worksMain, worksMainLen } = this.state
        console.log("MMMMMM", this.state.worksMain.length)
        console.log("MMMMMM current page", this.state.currentPage)
        console.log("MMMMMM page tags", this.state.pageTags)
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
                                    <div>
                                        <ul className="pagination pt-3 ml-2">

                                            <li key="pagination-p" className="page-item"><a className="page-link" href="#" onClick={this.handlePreviousClick}>Previous</a></li>
                                            {this.state.pageTags.map((t, index) => (
                                                <li key={`pagination-${index}`} className="page-item"><a className="page-link" href="#" value={t} onClick={this.handleTagClick}>{t}</a></li>
                                            ))}
                                            <li key="pagination-n" className="page-item"><a className="page-link" href="#" onClick={this.handleNextClick}>Next</a></li>
                                        </ul>
                                    </div>

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
