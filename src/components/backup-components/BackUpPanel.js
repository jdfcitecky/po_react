// this will be backup panel
import React, { Component } from 'react';
import Sidebar from '../ui-components/Sidebar';
import "./BackUpPanel.css"
import ProgressBar from "@ramonak/react-progress-bar";
import ReactLoading from 'react-loading';
export default class BackUpPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [
                //-------
                {
                    id: -1,
                    title: "Dynamic Architectural Curtain Design Using Python",
                    category: "Design",
                    text: "After many competitions and courses, I found that using the graphics software API interface to manipulate environmental data to generate models will greatly improve work efficiency and design reliability. Since then, I have devoted a lot of energy to learning in the field of information. In the final project of a basic programming language course at National Taiwan University, I showed how to use Python API to operate graphical software to perform plane segmentation on any surface and generate suitable curtain shapes according to the angle of sunlight to show how to use basic programming sytax in practical applications.",
                    tools: "Python Rhino Grasshopper3D",
                    year: "2018",
                    downloadlink: "#",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_5.png`,

                }, {
                    id: -1,
                    title: "使用Python進行動態建築帷幕設計",
                    category: "Design",
                    text: "經歷了多次競圖與課程的建築設計工作，我發現使用繪圖軟體API接口操作環境數據以生成模型將大幅提升工作效率與設計可靠度，從此我將大量精力投入在資訊領域的學習上。在一堂台大的基礎程式語言課程上的期末專案中，我就展示了如何用Python操作繪圖軟體在任意表面上進行平面分割，並根據太陽光照射的角度產生適合的帷幕造型以展示基礎程式語言的實際應用。",
                    tools: "Python Rhino Grasshopper3D",
                    year: "2018",
                    downloadlink: "#",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_basic/py_basic_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Line Weather Notification Robot with Excel Message Panel",
                    category: "Backend",
                    text: "經歷了多次競圖與課程的建築設計工作，我發現使用繪圖軟體API接口操作環境數據以生成模型將大幅提升工作效率與設計可靠度，從此我將大量精力投入在資訊領域的學習上。在一堂台大的基礎程式語言課程上的期末專案中，我就展示了如何用Python操作繪圖軟體在任意表面上進行平面分割，並根據太陽光照射的角度產生適合的帷幕造型以展示基礎程式語言的實際應用。",
                    tools: "Python xlwings excel lineAPI",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1L7LXXgvhoNCpJbJ0KZO7INb6z8M60rtf/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_5.png`,

                }, {
                    id: -1,
                    title: "Line天氣通知機器人與Excel訊息面板",
                    category: "Backend",
                    text: "經歷了多次競圖與課程的建築設計工作，我發現使用繪圖軟體API接口操作環境數據以生成模型將大幅提升工作效率與設計可靠度，從此我將大量精力投入在資訊領域的學習上。在一堂台大的基礎程式語言課程上的期末專案中，我就展示了如何用Python操作繪圖軟體在任意表面上進行平面分割，並根據太陽光照射的角度產生適合的帷幕造型以展示基礎程式語言的實際應用。",
                    tools: "Python xlwings excel lineAPI",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1L7LXXgvhoNCpJbJ0KZO7INb6z8M60rtf/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_5.png`,

                },],
            worksShow: [],
            isInitialzing: false,
            isInitialzingArray: [],
            currentUploadId: 0,
            uploading: false,
            error: null,
            errors: [],
            isManager: this.props.isManager,
            jwt: this.props.jwt,
            alert: {
                type: "d-done",
                message: "",
            },
        }
    }

    componentDidMount() {
        //To retrive comments
        let worksWithColor = this.state.works.map(w => this.colorAssign(w))
        this.setState({
            worksShow: worksWithColor
        })

        // this.getComments()
    }

    handleInitClick = (e) => {
        e.preventdefault()
        this.setState({
            isInitialzing: true,
        })
        this.saveWorkStep()
    }

    saveWorkStep = () => {
        let works = this.state.works
        let worksLen = this.state.works.length
        let numberOfSuccessUpload = this.state.isInitialzingArray.length
        if (worksLen == numberOfSuccessUpload) {
            this.setState({
                isInitialzing: false,
            })
            return
        }
        else {
            if (!this.state.uploading) {
                this.saveWork(works[numberOfSuccessUpload])
            }
        }
        window.setTimeout(this.saveWorkStep, 500)

    }

    saveWork = (work) => {
        // we passed, so post info
        if (!this.state.uploading) {
            this.setState({
                uploading: true
            })
            const payload = work
            var myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")
            myHeaders.append("Authorization", "Bearer " + this.props.jwt)
            myHeaders.append("token", this.props.jwt)
            payload["id"] = work.id
            payload["tags"] = (work.category + " " + work.tools).toLowerCase()
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: myHeaders,
            }
            fetch(`http://${this.state.API_IP}/admin/work/save`, requestOptions)
                .then((response) => {
                    if (response.status == "200") {
                        let array = this.state.isInitialzingArray
                        array.push(true)
                        this.setState({
                            isInitialzingArray: array,
                            uploading: false
                        })
                    }
                    return response.json()
                })
        }
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
        let { worksShow, error, isManager, isInitialzing } = this.state
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isManager) {
            console.log("push to index")
            this.props.history.push({
                pathname: "/",
            })

        }
        if (isInitialzing) {
            let progressNumber = Number(String(this.state.isInitialzingArray.length / this.state.works.length * 100).slice(0, 3))
            return (
                <div>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                    <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <div className='container'>
                        <div className='row'>
                            <Sidebar />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                    <h1 className="h2">Backup</h1>
                                </div>
                                <div className="align-items-center text-center row d-flex justify-content-center mt-5">
                                    <ReactLoading className="align-items-center" type='spin' color='#BFBFBF' height={100} width={100} />
                                </div>
                                <div className="align-items-center text-center row d-flex justify-content-center">
                                    <p>Initializing...</p>
                                </div>
                                <div className="px-2">
                                    <ProgressBar completed={progressNumber} bgColor="#17a2b8" />
                                </div>

                            </main>
                        </div>

                    </div>
                </div>
            )
        }
        return (

            <div>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <div className='container'>
                    <div className='row'>
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Backup</h1>
                                <div className='btn btn-primary' onClick={() => { this.handleInitClick() }}>Initail</div>
                            </div>

                            {worksShow.map((w) => (
                                <div className="my-3 card col-md-12 fadeIn">
                                    <div className='row'>
                                        <div className='col-8'>
                                            <div className="card-body d-flex flex-column align-items-start">
                                                <div class="d-flex flex-row">
                                                    <strong className={`d-inline-block mb-2 text-${w.color}`}>{w.category}</strong>
                                                    <span className="dot mx-2 my-2"></span><span className=" mr-2">{w.year}</span>
                                                </div>
                                                <h3 className="mb-0">
                                                    <p className="text-dark backup-card-title">{w.title}</p>
                                                </h3>
                                                <p className="backup-card-text">{w.text}</p>

                                            </div>
                                        </div>
                                        <div className='col-4 backup-card-tools'>
                                            <div className='d-flex flex-column'>
                                                <div class="">
                                                    {w.toolTags.map((t) => (
                                                        <span class="badge badge-info mx-1">{t}</span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card p-2 mb-4 box-shadow h-md-250 d-flex justify-content-between">
                                        <div class="pt-4 d-flex justify-content-between">
                                            <div className='backup-previewZone'><img src={w.pictureone} /></div>
                                            <div className='backup-previewZone'><img src={w.picturetwo} /></div>
                                            <div className='backup-previewZone'><img src={w.picturethree} /></div>
                                            <div className='backup-previewZone'><img src={w.picturefour} /></div>
                                            <div className='backup-previewZone'><img src={w.picturefive} /></div>
                                        </div>

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