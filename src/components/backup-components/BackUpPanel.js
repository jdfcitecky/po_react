// this will be backup panel
import React, { Component } from 'react';
import Sidebar from '../ui-components/Sidebar';
import "./BackUpPanel.css"
import { MessageCircle, X, ChevronsRight } from 'react-feather';
export default class BackUpPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [{
                id: -1,
                title: "Title",
                category: "Backend",
                text: "Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).",
                tools: "python mysql golang javascript",
                year: "2020",
                downloadlink: "#",
                pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/a.jpg`,
                picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/a.jpg`,
                picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/a.jpg`,
                picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/a.jpg`,
                picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/a.jpg`,

            },],
            worksShow: [],
            isLoaded: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            jwt: this.props.jwt,
            alert: {
                type: "d-done",
                message: "",
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //To retrive comments
        let worksWithColor = this.state.works.map(w => this.colorAssign(w))
        this.setState({
            worksShow: worksWithColor
        })

        // this.getComments()
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
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

    colorAssign = (work) => {
        work["toolTags"] = work.tools.split(' ');
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



    render() {
        let { worksShow, error, isManager } = this.state
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isManager) {
            console.log("push to index")
            this.props.history.push({
                pathname: "/",
            })

        }
        return (

            <div>
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Backup</h1>
                            </div>

                            {worksShow.map((w) => (
                                <div className="col-md-12 fadeIn">
                                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                        <div className="card-body d-flex flex-column align-items-start">
                                            <div class="d-flex flex-row">
                                                <strong className={`d-inline-block mb-2 text-${w.color}`}>{w.category}</strong>
                                                <span className="dot mx-2 my-2"></span><span className=" mr-2">{w.year}</span>
                                            </div>
                                            <h3 className="mb-0">
                                                <p className="text-dark">{w.title}</p>
                                            </h3>
                                            <p className="backup-card-text">{w.text}</p>
                                            <div class="d-flex flex-row">
                                                {w.toolTags.map((t) => (
                                                    <span class="badge badge-info mx-1">{t}</span>
                                                ))}
                                            </div>

                                        </div>

                                        <img className="backup-card-img card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
                                    </div>
                                </div>
                            ))}


                        </main>
                    </div>

                </div>
            </div>

        );
    }
}