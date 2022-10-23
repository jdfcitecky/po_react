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
                    downloadlink: "https://drive.google.com/drive/folders/1OWmeXv_U56yMq6BPrNC6hsPWPCs9a6RC?usp=sharing",
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
                    downloadlink: "https://drive.google.com/drive/folders/1OWmeXv_U56yMq6BPrNC6hsPWPCs9a6RC?usp=sharing",
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
                    text: "During the production of this project, I learned how to obtain data with crawler, webdriver, and JSON, XML, or YAML formats, and record these data to Excel using the xlwings library as a database and display panel. Then use these data to create a Line chatbot. In the end, I used the government's official weather data API to obtain the data in JSON format and recorded it in an excel sheet, and used this data to make a Line chatbot that can query weather information in various places and issue rain and low temperature warnings.",
                    tools: "Python xlwings beautifulsoup Excel LineBOTAPI",
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
                    text: "在本專案的製作過程中，我學習了如何以爬蟲、webdriver，以及JSON、XML或YAML等格式獲取資料，並將這些資料藉由xlwings函式庫記錄到Excel表格作為資料庫與展示面板使用，而後運用這些資料製作Line聊天機器人。最終，我採用政府官方的天氣資料API獲得JSON格式的資料並記錄於excel表格中，並運用這些資料製作可查詢各地的天氣資訊與提出下雨和低溫警示的Line聊天機器人。",
                    tools: "Python xlwings Excel beautifulsoup LineBOTAPI",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1L7LXXgvhoNCpJbJ0KZO7INb6z8M60rtf/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/pyxl/pyxl_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Implementing MVC Architecture with Python Django",
                    category: "Backend",
                    text: "This project is a very early work when I was learning to make Web Apps. Compared with the Flask, I chose to learn the more complicated Django first. In this project, I used a fairly simple application to demonstrate my understanding of MVC. Architecture. In this project, in order to display news headlines on the homepage, first create the corresponding article model, then define the routing and control function, and use this function to call the data to display in the view template through ORM library. However, due to the lack of knowledge of html and css at that time, the results were extremely simple, which also prompted me to further study the front-end and back-end related knowledge.",
                    tools: "Python xlwings beautifulsoup Excel LineBOTAPI",
                    year: "2020",
                    downloadlink: "https://drive.google.com/drive/folders/1I0_dnHWY2kj3jgS4TLxtgY0ViZ3rB0oW?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_5.png`,

                }, {
                    id: -1,
                    title: "以Python Django實現MVC架構",
                    category: "Backend",
                    text: "本專案是我在學習製作Web App時相當初期的作品，相較於較為輕量的Flask，我選擇先學習較為複雜的Django，而在這個專案中即用了相當簡單的應用展示了我對於MVC架構的理解。在這個專案中，為了在首頁展示新聞標題，先建立對應的文章模型(Model)，接著定義路由與控制(Control)函數，並藉由這個函數透過ORM的方式調用資料顯示於視圖(View)模板中。但由於當時缺乏html與css的知識，因此在成果上極為簡陋，也促使我想更進一步學習前後端相關知識。",
                    tools: "Python Django SQLite",
                    year: "2020",
                    downloadlink: "https://drive.google.com/drive/folders/1I0_dnHWY2kj3jgS4TLxtgY0ViZ3rB0oW?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_django/py_django_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Product display webpage based on MVC architecture with Python Flask and Firebase database",
                    category: "Backend",
                    text: "In this project, I using the lighter and more flexible features of flask compared to django to create a product display website, and integrating the firebase database to realize the common functions such as login, logout, database writing, and database reading.  And use the MVC framework and jinja template language to dynamically control and reuse the html elements according to the user's login status.  Compared with the simple web pages of previous projects, I also used the feature of server side render to introduce Boostrap in this project, using various input, modal, and card components to improve quality of the web pages.",
                    tools: "Python Flask Firebase Boostrap",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1nJOGXLRW2qz5c7s8pdD3oMFPJ9Cv2IVm/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_5.png`,

                }, {
                    id: -1,
                    title: "以Python Flask與Firebase資料庫實現基於MVC架構的商品展示網頁",
                    category: "Backend",
                    text: "在本專案我以製作一個商品展示網站為目標，運用flask相對於django更加輕量靈活的特性，整合firebase資料庫實現了常見的登入登出、資料庫寫入、資料庫讀取的功能。並運用MVC架構和jinja模板語言實現根據使用者登入狀態動態控制畫面元素與html元件重複使用。相較於過往專案的畫面簡陋，我也運用server side render的特性，在本專案中引入Boostrap，使用各種input、modal、card元件提升網頁的質感。",
                    tools: "Python Flask Firebase Boostrap",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1nJOGXLRW2qz5c7s8pdD3oMFPJ9Cv2IVm/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "TODO",
                    category: "Backend",
                    text: "In this project, I using the lighter and more flexible features of flask compared to django to create a product display website, and integrating the firebase database to realize the common functions such as login, logout, database writing, and database reading.  And use the MVC framework and jinja template language to dynamically control and reuse the html elements according to the user's login status.  Compared with the simple web pages of previous projects, I also used the feature of server side render to introduce Boostrap in this project, using various input, modal, and card components to improve quality of the web pages.",
                    tools: "css",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1nJOGXLRW2qz5c7s8pdD3oMFPJ9Cv2IVm/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_5.png`,

                }, {
                    id: -1,
                    title: "TODO",
                    category: "Backend",
                    text: "在本專案我以製作一個商品展示網站為目標，運用flask相對於django更加輕量靈活的特性，整合firebase資料庫實現了常見的登入登出、資料庫寫入、資料庫讀取的功能。並運用MVC架構和jinja模板語言實現根據使用者登入狀態動態控制畫面元素與html元件重複使用。相較於過往專案的畫面簡陋，我也運用server side render的特性，在本專案中引入Boostrap，使用各種input、modal、card元件提升網頁的質感。",
                    tools: "css",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1nJOGXLRW2qz5c7s8pdD3oMFPJ9Cv2IVm/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/py_flask/py_flask_5.png`,

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
                                                <div className="align-items-start">
                                                    {w.toolTags.map((t) => (
                                                        <span class="badge badge-info m-1 float-left">{t}</span>
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