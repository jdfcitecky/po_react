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
            pageLimit: 1,
            maxPage: 0,
            // For pagination
            pageTags: [1],
            maxRecordsNumber: 1,
            numberOfRecordsInPage: 1,
            currentPage: 1,
            maxPageForP: 1,
            enableClick: true,


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
        if (pageStart + this.state.pageLimit > maxPage) {
            this.setState({
                pageStart: maxPage,
                worksShow: worksWithCategory.slice(pageStart, this.state.pageLimit),
            })
        } else {
            this.setState({
                pageStart: pageStart,
                worksShow: worksWithCategory.slice(pageStart, pageStart + this.state.pageLimit),
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
                currentPage: 1,
                maxPageForP: this.calculateMaxPage(newWorksMain.length, this.state.pageLimit),

            })
        } else {
            newWorksMain = this.state.works.filter(w => w.category == cate)
            this.setState({
                category: cate,
                worksMain: newWorksMain,
                currentPage: 1,
                maxPageForP: this.calculateMaxPage(newWorksMain.length, this.state.pageLimit),
            })
        }
        this.handlePageStart(0, newWorksMain.length, newWorksMain)
        this.handlePageTags(1, this.calculateMaxPage(newWorksMain.length, this.state.pageLimit))

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
        if (page > this.state.worksMain.length) {
            page = this.state.worksMain.length
        }
        if (page < 0) {
            page = 0
        }
        let len =
            console.log("transformPageStart", page, this.state.worksMain.length, this.state.worksMain)
        this.handlePageStart(page, this.state.worksMain.length, this.state.worksMain)
    }

    handlePreviousClick = () => {
        console.log("previous hit")
        if (this.state.enableClick) {
            this.setState({
                enableClick: false,
            })
            console.log("previoussss in")
            let newCurrentPage = this.state.currentPage - 1
            if (newCurrentPage < 1) {
                setTimeout(() => {
                    this.setState({
                        enableClick: true,
                    })
                }, 300);
                return
            }
            this.setState({
                currentPage: newCurrentPage,
            })
            console.log("previous new page", newCurrentPage)
            this.handlePageTags(newCurrentPage, this.state.maxPageForP)
            console.log("previous handle tags", newCurrentPage)
            this.transformPageStart(0 + this.state.numberOfRecordsInPage * (newCurrentPage - 1))
            console.log("previous handle page view", newCurrentPage)
            setTimeout(() => {
                this.setState({
                    enableClick: true,
                })
            }, 1000);
        }
        return
    }

    handleNextClick = () => {
        console.log("Nexxxxxt hit")
        if (this.state.enableClick) {
            console.log("Nexxxxxt hit in ffffff")
            this.setState({
                enableClick: false,
            })
            let newCurrentPage = this.state.currentPage + 1
            console.log("Nexxxxxt hit in ffffff", newCurrentPage)
            if (newCurrentPage > this.state.maxPageForP) {
                setTimeout(() => {
                    this.setState({
                        enableClick: true,
                    })
                }, 300);
                return
            }
            this.setState({
                currentPage: newCurrentPage,
            })
            console.log("Nexxxxxt hit in ffffff SET STATE", newCurrentPage)
            this.handlePageTags(newCurrentPage, this.state.maxPageForP)
            console.log("Nexxxxxt hit in ffffff HANDLE TAG", newCurrentPage)
            this.transformPageStart(0 + this.state.numberOfRecordsInPage * (newCurrentPage - 1))
            console.log("Nexxxxxt hit in ffffff HANDLE PAGE START", newCurrentPage)
            setTimeout(() => {
                this.setState({
                    enableClick: true,
                })
            }, 1000);
            console.log("Nexxxxxt ENNNND", newCurrentPage)
        }
        return
    }

    handleTagClick = (e) => {
        console.log("taggggg hit")
        if (this.state.enableClick) {
            this.setState({
                enableClick: false,
            })
            let innerHTML = e.target.innerHTML
            if (innerHTML == "...") {
                setTimeout(() => {
                    this.setState({
                        enableClick: true,
                    })
                }, 300);
                return
            }
            let newCurrentPage = Number(innerHTML)
            if (newCurrentPage > this.state.maxPageForP) {
                setTimeout(() => {
                    this.setState({
                        enableClick: true,
                    })
                }, 300);
                return
            }
            if (newCurrentPage < 1) {
                setTimeout(() => {
                    this.setState({
                        enableClick: true,
                    })
                }, 300);
                return
            }
            this.setState({
                currentPage: newCurrentPage,
            })
            this.handlePageTags(newCurrentPage, this.state.maxPageForP)
            this.transformPageStart(0 + this.state.numberOfRecordsInPage * (newCurrentPage - 1))
            setTimeout(() => {
                this.setState({
                    enableClick: true,
                })
            }, 500);
        }
        return
    }

    handlePageTags = (currentPage, endPage) => {
        console.log("HHHandle TTTaggggs", currentPage, endPage)
        let newTags = []
        newTags.push(endPage)
        newTags.push(1)
        newTags.push(currentPage)
        if (currentPage - 1 > 1) {
            newTags.push(currentPage - 1)
            if (currentPage - 2 > 1) {
                newTags.push(currentPage - 2)
            }
        }
        if (currentPage + 1 < this.state.maxPageForP) {
            newTags.push(currentPage + 1)
            if (currentPage + 2 < this.state.maxPageForP) {
                newTags.push(currentPage + 2)
            }
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
        let { works, isLoaded, error, isManager, pageStart, pageLimit, worksShow, worksMain } = this.state
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

                                    <ul className="pagination pt-3 ml-2">

                                        <li key="pagination-p" className="page-item"><div className="page-link" onClick={this.handlePreviousClick}>Previous</div></li>
                                        {this.state.pageTags.map((t, index) => (
                                            <li key={`pagination-${index}`} className="page-item"><div className={`page-link page-${t}`} value={t} onClick={this.handleTagClick}>{t}</div></li>
                                        ))}
                                        <li key="pagination-n" className="page-item"><div className="page-link" onClick={this.handleNextClick}>Next</div></li>
                                    </ul>


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
