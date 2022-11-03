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
                    title: "Basic CSS and HTML practice page",
                    category: "Frontend",
                    text: "This project is the implementation of basic CSS and HTML, using Boostrap as the basic style sheet. In addition, to show the basic knowledge of using the container, row, and col styles, it also shows how to use margin, padding, block, inline, flex, and other styles to present different element arrangements, and use the position style to complete the floating button and the fixed-position navigation bar. In order to experiment with more animation effects, this project also uses :hover and transition styles and wow.js to make the web page more vivid.",
                    tools: "HTML CSS Boostrap WOW.js",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1brrwl45_xqMtomMGJST8qEbBkDNoJwh1/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_5.png`,

                }, {
                    id: -1,
                    title: "基礎CSS與HTML練習網頁",
                    category: "Frontend",
                    text: "本專案為基本CSS與HTML的成果實作，使用了Boostrap作為基礎樣式表，除了展現基本的切版知識外，也展示了如何使用margin、padding、block、inline、flex等樣式呈現不同的元素排列效果，並運用position樣式完成懸浮按鈕與固定位置的導覽列。而為了實驗更多的動畫效果，本專案也大量使用:hover與transition樣式和wow.js讓網頁更加生動。",
                    tools: "HTML CSS Boostrap WOW.js",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1VJaewtWZC5F-wUF8pPfWcdObsTbpRg5W/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/html_basic/html_basic_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Simple Web Image Editor",
                    category: "Frontend",
                    text: "After understanding the basics of CSS and HTML, I turned my attention to learning Javascript. This project is the first small work after learning modern Javascript. This work takes Canvas as the core, and provides users to perform color inversion, lightening, oil painting filters and other operations after uploading pictures. Users can also download the edited pictures. The upload and download functions both use the Javascript functions that generate DOM to dynamically change web page elements. The main filters use the knowledge of Javascript functions and data structure to perform numerical operations on each pixel point in the image.",
                    tools: "HTML Javascript Canvas",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1onS0NiQC5356B77KcOtUJ6VNuQT9sdv1/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_5.png`,

                }, {
                    id: -1,
                    title: "簡易網頁圖像編輯器",
                    category: "Frontend",
                    text: "了解CSS與HTML相關基礎知識後，我將眼光放到了Javascript的學習。而本專案就是在學習了現代Javascript之後的第一個小作品，這個作品以Canvas為核心，提供使用者上傳圖片後進行顏色反轉、變亮、油畫濾鏡等操作並下載編輯後的圖片。其中上傳與下載的功能皆使用了Javascript能產生DOM的函數以動態改變網頁元素。而主要的濾鏡則運用了Javascript的函數與資料結構相關知識，針對圖片中的每一個相素點進行數值操作來實現。",
                    tools: "HTML Javascript Canvas",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1onS0NiQC5356B77KcOtUJ6VNuQT9sdv1/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_basic/js_canvas_basic_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Web Bullet Curtain Game",
                    category: "Frontend",
                    text: "After understanding the basic Canvas operation, this project further implements a simple Canvas-based game engine through the design of the project structure and program flow, and uses this engine to create a web page barrage game. This simple game engine is mainly divided into three parts. The first part is the management of game data. The most important element in this part is the update function of each element. The position on the screen and state of all elements are changed by this function. The second part is the control of the game flow. The most important function in this part is the refresh function. This function will clear the screen and perform some background information such as the bullet moving and determining whether the bullet hits the plane and then redraw the screen. The third part is the management of user input, monitoring the up and down of each key and updating the data according to the current state.This three parts are stitched together by the setInterval function and EventListener function. Finally, Javascript is used to control the elements to distinguish the entire game loading, preparing to start, in-game, and ending the game to complete a relatively complete web game design process.",
                    tools: "HTML Javascript Canvas",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/14GUOAnOVSTT2k1N6p--v2OQ2rvA8B8hI/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_5.png`,

                }, {
                    id: -1,
                    title: "網頁彈幕遊戲",
                    category: "Frontend",
                    text: "理解了基本的Canvas操作之後，本專案則更進一步透過專案架構與程式流程的設計實現了基於Canvas的簡易遊戲引擎，並用這個引擎製作了一個網頁彈幕遊戲。這個簡易遊戲引擎主要分為三個部分，第一個部分為遊戲資料的管理，在這個部分最重要的元素為每一個元件的update函數，所有元素的畫面位置與狀態皆由這個函數改變。第二個部分為遊戲流程的控制，這個部分中最主要的函數為refresh函數，這個函數將清空畫面並執行一些如彈幕飛舞與判定彈幕是否撞擊飛機的背景資料更新後重新繪製畫面。第三個部分則為使用者輸入的管理，監聽每一個按鍵的上下並依照當前的狀態更新資料。有了這三個部分後，藉由setInterval和EventListener將這三部分縫合。最終使用Javascript控制畫面元素區分整個遊戲載入、準備開始、遊戲中、結束遊戲這四個階段完成相對完整的網業遊戲設計流程。",
                    tools: "HTML Javascript Canvas",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/14GUOAnOVSTT2k1N6p--v2OQ2rvA8B8hI/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_canvas_game/js_canvas_game_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Product website and API implementation based on Express.js",
                    category: "Backend",
                    text: "Except uses Javascript to create web games and applications, Javascript is also commonly used to create servers to provide web services. In this project, Express.js and Firebase databases are used to create a product display website based on MVC architecture, which implemented database CRUD functions and serverside-based member authentication control functions. In addition, this website also shows the function of making API services with Express.js on a separate page.",
                    tools: "Javascript NodeJS Nodemon Express.js HTML CSS Boostrap Firebase",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1X-sYHAGubS6EHermZsTmKVXKTAkLTzqJ/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_5.png`,

                }, {
                    id: -1,
                    title: "基於Express.js的商品網站與API實作",
                    category: "Backend",
                    text: "除了使用Javascript製作網頁遊戲和應用，Javascripy也常用來創建伺服器提供網路服務。在本專案中即使用Express.js和Firebase資料庫製作一個基於MVC架構的商品展示網站，實現資料庫增刪改查與基於伺服器端的會員權限控管功能，充分運用Javascript能同時作為前後端語言的特性以提高開發效率。另外這個網站也以一個單獨的頁面展示了使用Express.js製作API服務的功能。",
                    tools: "Javascript NodeJS Nodemon Express.js HTML CSS Boostrap Firebase",
                    year: "2020",
                    downloadlink: "https://drive.google.com/file/d/1X-sYHAGubS6EHermZsTmKVXKTAkLTzqJ/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/js_web/js_web_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Cross-Assets Decentralized Market",
                    category: "M.S Project",
                    text: "This project is the final project of the Distributed Database Course. In this class, we learned about the consistency, scalability, and response delay that the distributed database must face by reading the papers, and learned about the future distributed database Related applications and optimization directions. We chose to have an in-depth understanding of cross-training transactions and create a cross-chain trading platform. In this platform, we have implemented the functions of making digital assets and publishing smart contracts, and smart contract transactions with a graphical interface to make cross-chain transactions easier. Technically, we studied the use of TEAL programming language and chose to use PyTEAL for smart contract translation in order to cooperate with the Flask framework. And use Algorand's API to realize the functions of asset creation and smart contract release.",
                    tools: "Python Flask Algorand PyTEAL Boostrap",
                    year: "2020",
                    downloadlink: "https://drive.google.com/drive/folders/1CDyStakPWsiqeo-wdnQjZlNGyQ7NFmsJ?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_5.png`,

                }, {
                    id: -1,
                    title: "分散式跨資產交易市場",
                    category: "M.S Project",
                    text: "本專案為分散式資料庫課程的專題作業，在本課堂中我們藉由閱讀論文了解了分散式資料庫必須面對的一致性、擴展性以及響應延遲的問題，並且瞭解了未來分布式資料庫相關的應用與優化方向。最終我們選擇深入了解跨練交易，並製作一個跨鍊交易平台。在這個平台中，我們實現了以圖形化介面製作數位資產、發布智能合約和智能合約交易功能讓跨鍊交易變得更加容易。在技術上我們研究了TEAL語言的使用方法，並為了配合Flask框架而選擇使用PyTEAL進行智能合約的轉譯。並運用Algorand的API實現資產創建與智能合約發布的功能。",
                    tools: "Python Flask Algorand PyTEAL Boostrap",
                    year: "2020",
                    downloadlink: "https://drive.google.com/drive/folders/1CDyStakPWsiqeo-wdnQjZlNGyQ7NFmsJ?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_265/ms_265_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "RISCV-based game console operating system",
                    category: "M.S Project",
                    text: "This project is the final project of the operating system course. In this class, we reviewed the basic concepts of the operating system in the form of classroom reports, and our professor prepared a game console simulator based on the RISCV processor as the basic hardware of the project. The game simulator has a display screen with eight buttons and a button for reading a cassette and provides a text display mode and a color block display mode. We must implement the function of reading the cassette and color block display according to the memory address provided by the hardware. In this project, in addition to the basic functions, I used my previous experience in designing web games to implement functions including data management, element drawing, error handling, controller management, and timers for the operating system of this hardware to build a good infrastructure for future developers.",
                    tools: "C++ C RISCV OS Operating System",
                    year: "2021",
                    downloadlink: "https://drive.google.com/drive/folders/1eXZfZlQjsX5Mqg48pSbbFQ8DMHZrU_PZ?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_5.png`,

                }, {
                    id: -1,
                    title: "基於RISCV的遊戲機作業系統",
                    category: "M.S Project",
                    text: "本專案為作業系統課程的專題作業，在本課堂中我們以課堂報告的方式複習了作業系統的基礎概念，而我們的教授則準備了一個基於RISCV處理器的遊戲機模擬器作為專題的基礎硬體。該遊戲模擬器具有一個顯示螢幕與八個按鍵和一個讀取卡帶的按鍵，並提供顯示文字顯示模式與色塊顯示模式。我們必須根據硬體提供的記憶體位址實現讀取卡帶和色塊顯示的功能。在本專案中，除了基本功能外，我憑藉著先前設計網頁遊戲的經驗為這個硬體的作業系統實現了包含資料管理、畫面元素繪製、錯誤處理、控制器管理以及計時器等功能為後續的開發者建立了良好的基礎設施。",
                    tools: "C++ C RISCV OS Operating System",
                    year: "2021",
                    downloadlink: "https://drive.google.com/drive/folders/1eXZfZlQjsX5Mqg48pSbbFQ8DMHZrU_PZ?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_os/ms_os_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Ethernet ALOHA protocol simulation",
                    category: "M.S Project",
                    text: "This project is a project assignment for the Internet course. In this class, we mainly focus on how to establish a reliable Internet connection and evaluate and reduce the latency of Internet applications. Therefore, in this project, we used Simpy to simulate a host using different congestion-prevention mechanisms for packet forwarding. Finally, we found that using the exponential backoff mechanism can achieve better throughput in a higher load environment than using the congestion prevention mechanism with a fixed probability.",
                    tools: "Python Simpy",
                    year: "2021",
                    downloadlink: "https://colab.research.google.com/drive/1i8p_UvN5nVLkQbJWx0FF5XT3WW_UgKFG?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_5.png`,

                }, {
                    id: -1,
                    title: "以太網ALOHA協議模擬",
                    category: "M.S Project",
                    text: "本專案為網際網路課程的專題作業，在本課堂中我們主要聚焦在如何建立可靠的網路連線與評估並降低網路應用程式的延遲。因此在本專案中，我們使用了Simpy模擬了一個主機使用不同壅塞防止機制進行封包轉發，最終我們發現了使用exponential backoff機制比起使用固定機率的壅塞防止機制能在更高的負載環境中取得較高的吞吐量。",
                    tools: "Python Simpy",
                    year: "2021",
                    downloadlink: "https://colab.research.google.com/drive/1i8p_UvN5nVLkQbJWx0FF5XT3WW_UgKFG?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_252/ms_252_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Rendering Algorithm Optimization Experiment - Z-Buffer and Painter Algorithms",
                    category: "M.S Project",
                    text: "This project is the final project for the Algorithm class. Our main goal in this class is to understand how to evaluate and improve an algorithm. Therefore, in this project, we choose to study the algorithm of 3D scenes to 2D pictures. The main problem in such an algorithm is how to quickly distinguish the order of objects in the scenes and consider the transparency of objects and the situation when objects move. In order to solve such a problem, according to the literature, we know that Z-Buffer or Painter algorithm can be used and BSP data structure can be added for further optimization. Finally, we used Python to design a set of experiments for rendering images and compared the Z-Buffer algorithm with the Painter algorithm. Finally, we learned that the Z-Buffer algorithm Buffer algorithm has obvious advantages in complex dynamic images.",
                    tools: "Python",
                    year: "2021",
                    downloadlink: "https://docs.google.com/presentation/d/1quoYB5Zg7-3xjmDi5fj-Bks-3Jt0JWgq/edit?usp=sharing&ouid=115682892065479641575&rtpof=true&sd=true",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_5.png`,

                }, {
                    id: -1,
                    title: "渲染演算法優化實驗 - Z-Buffer與Painter演算法",
                    category: "M.S Project",
                    text: "本專案為演算法課程的專題作業，在本課堂中我們主要的目標是了解如何評估並改良一個演算法。因此在本專案中，我們選擇研究關於三維場景至二維圖片的演算法。在這樣的演算法中最主要的問題是如何快速的分辨畫面中物體的前後順序並考慮物體的透明度與物體發生移動時的情況。而為了解決這樣的問題，我們依照文獻得知主要可採用Z-Buffer或Painter演算法並加入BSP資料結構進行更進一步的優化。最終我們使用Python設計了一組渲染畫面的實驗並實現了Z-Buffer與Painter演算法進行比較，最終得知Z-Buffer演算法在複雜的動態畫面中具有相當明顯的優勢。",
                    tools: "Python",
                    year: "2021",
                    downloadlink: "https://docs.google.com/presentation/d/1quoYB5Zg7-3xjmDi5fj-Bks-3Jt0JWgq/edit?usp=sharing&ouid=115682892065479641575&rtpof=true&sd=true",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_222a/ms_222a_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Scientific Computing Simulation Experiment",
                    category: "M.S Project",
                    text: "This project is a series of project assignments in the scientific computing course. In this class, we mainly focus on how to use computer software to assist in the simulation of microscopic physical phenomena. In just 12 weeks, we performed simulation experiments on atomic distances within molecules, potential differences between atoms, electron clouds in molecules, and dynamic molecular behavior in extreme states. In each experiment we will actually operate the complete research process. In this process, we must quickly understand the physical concepts and corresponding libraries that we have not been exposed to before, and actually repeatedly perform data reading and writing and simulation experiments on remote Linux to write research reports.",
                    tools: "Linux C++ Qbox Quantum-Espresso",
                    year: "2021",
                    downloadlink: "https://drive.google.com/file/d/123km8RxnfGhU1XkdVebjmOwkbkwY_6GS/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_5.png`,

                }, {
                    id: -1,
                    title: "科學計算模擬實驗",
                    category: "M.S Project",
                    text: "本專案為科學計算課程的一系列專題作業，在本課堂中我們主要聚焦在如何使用電腦軟體輔助微觀物理現象的模擬。在僅有12周的時間內，我們針對了分子內的原子距離、原子的電位差、分子的電子雲以及極端狀態下的動態分子行為進行模擬實驗。每一個實驗裡我們都將實際操作完整的研究流程。在這個過程中，我們必須快速的了解曾未接觸過的物理觀念與對應的程式庫，並且實際在遠端Linux反覆進行資料讀寫與模擬實驗以撰寫研究報告。",
                    tools: "Linux C++ Qbox Quantum-Espresso",
                    year: "2021",
                    downloadlink: "https://drive.google.com/file/d/123km8RxnfGhU1XkdVebjmOwkbkwY_6GS/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_289k/ms_289k_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Application of Linear Algebra and Implementation of Numerical Methods",
                    category: "M.S Project",
                    text: "This project is a series of project assignments in the linear algebra application course. In this class, we first recognize and implement the errors or bottlenecks that may be caused by data types or division operations when the computer performs mathematical operations, and then we implement and compares different matrix decomposition using a C++ linear algebra calculation library, Eigen,  methods. Finally, we use these decomposition methods to complete the implementation of image compression and interpolation.",
                    tools: "C++ Eigen Python Matplotlib",
                    year: "2021",
                    downloadlink: "https://drive.google.com/file/d/1xAEAr-CK3KuM_K2vSBcg8WFmFR3jkjZa/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_5.png`,

                }, {
                    id: -1,
                    title: "線性代數應用與數值方法實作",
                    category: "M.S Project",
                    text: "本專案為線性代數應用課程的一系列專題作業，在本課堂中我們首先認識並實作了電腦進行數學運算時可能因為資料型態或除法運算造成的錯誤或瓶頸，接著我們使用了C++的線性代數運算庫Eigen實現並比較了不同的矩陣分解方法，最終我們則實際運用這些分解方式完成了影像壓縮壓縮處理與插值法的實作。",
                    tools: "C++ Eigen Python Matplotlib",
                    year: "2021",
                    downloadlink: "https://drive.google.com/file/d/1xAEAr-CK3KuM_K2vSBcg8WFmFR3jkjZa/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/ms_230/ms_230_5.png`,

                },
                //-------Below is the Architecture projects.
                {
                    id: -1,
                    title: "Cyanobacteria - 海洋組合式避難所",
                    category: "Design",
                    text: "本專案為大學一年級上學期第二次設計課作品，題目要求設想一種必須進行臨時收容大量災民的災難場景並針對這個場景設計對應的組合式避難所。在本專案中，我以2016年的中亞難民潮為背景，考慮了歐洲腹地較小的問題而設計出能夠在水下種植海藻和牡蠣並使用太陽能進行發電與海水淡化的海上避難小屋以保障最基礎的生活需求。另外，每間避難小屋也都能變換成臥室、浴室、客廳、健身房等空間，並藉由纜繩和水管串聯成能抵抗風浪的海上社區。",
                    tools: "SketchUp Lumion illustrator Pages AutoDesk PhotoShop",
                    year: "2016",
                    downloadlink: "https://drive.google.com/file/d/1PQDkWOdXa1GhIhdWHDyhgK0xup2TxDVH/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_1/arch_1_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_1/arch_1_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_1/arch_1_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_1/arch_1_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_1/arch_1_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "山禾居 - 三代同堂共生宅",
                    category: "Design",
                    text: "本專案為大學一年級上學期最後一次設計課作品，題目為2016年特力家居盃徵集題目——漸變。為了呼應題目，我將設計背景放到了台東池上山禾間的三代同堂家庭，採用了三個由內而外的漸變進行設計。在外觀上，我採用山的造型進行漸變轉化；在平面配置上，則將傳統三合院的元素抽取並配合當地的陽宮氣候條件轉化；在體驗設計上，則運用動線和大面積的開窗與天窗讓三代人不論在室內外都能在時光的流轉中感受四季的更迭。",
                    tools: "SketchUp Lumion illustrator Pages AutoDesk PhotoShop",
                    year: "2016",
                    downloadlink: "https://drive.google.com/file/d/1AyT7N9O1lxwHCDtC4LKJpjSQrB7hQa-T/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_2/arch_2_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_2/arch_2_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_2/arch_2_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_2/arch_2_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_2/arch_2_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "易逝之物 - 校園光影裝置藝術設計",
                    category: "Design",
                    text: "本專案為大學一年級下學期第一次設計課作品中的概念作品，在分析校園中會出現的人群後決定以所有人共同的童年為核心，使用自然光投影一個跳房子圖案在地面上完成使用者與光影的互動，並運用許多燕子造型的遮陽板結合曲面設計打造兼具實用與互動性的教學大樓外層帷幕與聯通廊。",
                    tools: "SketchUp Lumion illustrator Pages AutoDesk PhotoShop",
                    year: "2017",
                    downloadlink: "https://docs.google.com/presentation/d/1lMmW5QhvcnLklLhiho1_UXgHC-q7i-uu/edit?usp=sharing&ouid=115682892065479641575&rtpof=true&sd=true",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_3/arch_3_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_3/arch_3_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_3/arch_3_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_3/arch_3_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_3/arch_3_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "真幕之間 - 校園光影裝置藝術設計",
                    category: "Design",
                    text: "本專案為大學一年級下學期第一次設計課作品，這次的主題為校園光影裝置藝術設計，要求我們必須實際考察校園內的環境脈絡與人文分析自行選定基地位置與主題進行創作。在經歷了實地考察後，我最終選定了位於校門口的草坪作為基地位置。這個基地雖然為人車交會的地點且具有水池與木棧道等資源，但由於缺乏更進一步的規劃而成為學生繞開的一塊綠地。因此在本專案中我運用簡單的木材與布幔，融合現地植栽與池塘設計一條由動至靜的藝廊，讓樹影、水波紋路、人影、周遭的燈光都成為藝廊展品的一部分，用自然體驗的方式活絡校園入口意象並縫合行政區與教學區之間的空白。在技術上，這是我首個使用Vray進行渲染的設計作品，而模型也使用LED進行點綴力圖在發表時呈現最佳的光影效果。",
                    tools: "SketchUp VRay illustrator AutoDesk PhotoShop",
                    year: "2017",
                    downloadlink: "https://docs.google.com/presentation/d/1s_kelaNCN-LCq7aLQFRDYbJUcVdpfK8L/edit?usp=sharing&ouid=115682892065479641575&rtpof=true&sd=true",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_4/arch_4_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_4/arch_4_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_4/arch_4_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_4/arch_4_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_4/arch_4_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "潛共生 - 校園商店設計",
                    category: "Design",
                    text: "本專案為大學一年級下學期第二次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator AutoDesk PhotoShop",
                    year: "2017",
                    downloadlink: "https://docs.google.com/presentation/d/1CA7tjFrksjMETb_QFoa7zLSTo_WpAus0/edit?usp=sharing&ouid=115682892065479641575&rtpof=true&sd=true",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_5/arch_5_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_5/arch_5_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_5/arch_5_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_5/arch_5_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_5/arch_5_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "六草巷 - 齊東街住宅設計",
                    category: "Design",
                    text: "本專案為大學一年級下學期最後一次設計課作品，這次設計將基地移出學校外，以台北市中心的一處舊日本宿舍街區為基地，我們必須自行定義業主背景並依照環境脈絡進行設計。而我則選擇了一個四口之家為業主，考量現代人較需要個人隱私空間的習慣並結合當地巷弄穿梭的聚落型態，將家人每天生活的動線以一個巷弄形狀的客廳串聯，但又藉由日式迴廊和樓梯包容每個家庭成員各自的生活軌跡。中央的巷中巷引入自然風和光照，每間客房保有屬於自己的窗景，讓家庭的成長回憶和街區的人情風貌皆藏納於此。",
                    tools: "SketchUp VRay illustrator AutoDesk PhotoShop",
                    year: "2017",
                    downloadlink: "https://drive.google.com/file/d/159UlQOdpbBW2i4YQxXpVPstfirEAPuOr/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_6/arch_6_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_6/arch_6_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_6/arch_6_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_6/arch_6_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_6/arch_6_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "寶藏巖臨時展場設計",
                    category: "Design",
                    text: "本專案為大學二年級上學期第一次設計課作品，作為升上二年級之後的暖身設計作業，我們被要求更加深入的去探訪寶藏嚴聚落特殊的人文風情與自然脈絡創做一個兼顧當地區民生活與對外效益的臨時展場。為了達到居民與外來群眾雙贏的目標，我將基地設在寶藏巖靠近基隆河的水岸旁，在減少對於原生聚落的衝擊的同時也能作為自行車停靠的中繼站與福和橋通往台北市時能看到的顯著地標。而為了打造這一個國際地標，我首度採用Rhino Grasshopper將寶藏巖聚落獨特的屋頂型態進行轉化並構造成曲面桁架，並充分運用原先地形的高低差建立面向河岸或山壁的雙向展演廳，讓不論是外來的遊客、園方眺望的車流、社區的區民都能享受到展場帶來的活力。",
                    tools: "SketchUp VRay illustrator AutoDesk PhotoShop Rhino Grasshopper",
                    year: "2017",
                    downloadlink: "https://drive.google.com/file/d/1VJaewtWZC5F-wUF8pPfWcdObsTbpRg5W/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_7/arch_7_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_7/arch_7_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_7/arch_7_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_7/arch_7_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_7/arch_7_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "小房子 - 學成里圖書館設計",
                    category: "Design",
                    text: "本專案為大學二年級上學期最後一次設計課作品，這次基地位於城市中的地下停車場與公園上，在考量這片綠地對於周遭社區的重要性後，我決定用向下開挖的方式運用原先地下停車廠的空間並極大化的保留公園綠地。為了達成這個目標，我首先分析動線將圖書館主要區域建成一個地下道置於社區與主要動線間，接著依照環境配置兒童閱讀區和自習室，並設計一個能作為公園涼亭的天井同時解決圖書館採光與公園休憩的問題，讓圖書館與公園成為一個完整屬於居民的休憩天地。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2017",
                    downloadlink: "https://drive.google.com/file/d/1x0QSzPvF94PCf0778OxJV4CyntC5uogO/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_8/arch_8_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_8/arch_8_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_8/arch_8_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_8/arch_8_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_8/arch_8_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "社區銀髮俱樂部設計",
                    category: "Design",
                    text: "本專案為大學二年級下學期第一次設計課作品，作為目標為練習使用Revit與配合環境控制和建築材料課程的設計作業，本題目與快速設計題目較為接近，因此我主要透過對於周遭交通動線的分析進行應有的退縮，並考量周遭可能的吵雜或安靜區域配置教室空間，最終配合Revit分析日照的熱影響設計屋簷與簷廊以完成這次的設計。",
                    tools: "SketchUp Revit Lumion illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2018",
                    downloadlink: "https://drive.google.com/file/d/1bITsa0VQZkPner2ptKy-p4mIBVwNJBgl/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_9/arch_9_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_9/arch_9_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_9/arch_9_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_9/arch_9_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_9/arch_9_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "fraMe[in] - 淡水地方文化館",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，要求我們在淡水捷運站附近的一處古蹟和高腳屋混合區設計一間地方文化館，經由實地考察發現基地具有遼闊的視野與合適的緩坡，因此我用框景的改念作為設計核心，先引導遊客進入地下探索過往的歷史，接著進入地面層看周遭的自然環境，再上第二層看城市的變化，最終到第三層看淡水夕照，用實景與展品的方式加深遊客的記憶。同時我設計了平台和通往高腳屋的動線配合往來的腳踏車族群，外觀則使用大地色隱入在環境中，用交錯的量體成為一個大框，框起過去未來淡水的人文風情。",
                    tools: "SketchUp Lumion illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2018",
                    downloadlink: "https://drive.google.com/file/d/1G_JJce-it9eQYuUEQCeu8Sknn4KzUjhZ/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_10/arch_5_10.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_10/arch_5_10.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_10/arch_5_10.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_10/arch_5_10.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_10/arch_5_10.png`,

                },
                //-------
                {
                    id: -1,
                    title: "緣曇禪寺 - 宗教空間設計",
                    category: "Design",
                    text: "本專案為大學三年級上學期第一次設計課作品，基地為自來水園區旁的停車場，我們必須考察宗教建築特別的需求並將宗教期望給與信眾的精神以空間的形式傳達給使用者。然而我認為真實的心靈寄託必須來自自我內心或者真實，因此我設計了一個經輪外型的主空間內置一個透明佛像，讓往來的民眾皆受到矚空間金色外觀與宏亮的誦經聲吸引，但同時我也設計了一處較為寧靜灰冷的長廊讓想一窺主空間的使用者皆必須經過這裡進行省思，最後來到主空間時卻只看到信仰的虛象與真實的夕照或框景，讓使用者充分了解堅定與信心的真義。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2018",
                    downloadlink: "https://drive.google.com/file/d/1FaiJXNqRdBq16aLYQGzOYUWVN7LBRFnU/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_11/arch_11_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_11/arch_11_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_11/arch_11_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_11/arch_11_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_11/arch_11_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "社宅的N種可能 - 青埔社會住宅設計",
                    category: "Design",
                    text: "本專案為大學三年級最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2018",
                    downloadlink: "https://drive.google.com/file/d/14_-TUpaPDlRHbBOafi3IQaG7VPoIVMnT/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_12/arch_12_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_12/arch_12_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_12/arch_12_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_12/arch_12_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_12/arch_12_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "褪化 - 舊城區全年齡旅居改造",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/1R3vWjnr9_9_dryE3Jjwp3rGjEZSwFK60/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_1/arch_ex_1_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_1/arch_ex_1_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_1/arch_ex_1_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_1/arch_ex_1_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_1/arch_ex_1_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "畫映 - 模塊式智能生活單元",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/1LydjY9TReaYj4PT8lYXz2mr91HO865Zu/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_2/arch_ex_2_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_2/arch_ex_2_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_2/arch_ex_2_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_2/arch_ex_2_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_2/arch_ex_2_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Spore隱花居 - 移動式庇護所",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/1WsZC1HJtS5vQA4gEpH-yJLw_1hZHbtV2/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_3/arch_ex_3_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_3/arch_ex_3_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_3/arch_ex_3_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_3/arch_ex_3_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_3/arch_ex_3_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "Tube House 管居 - 多功能救難單元",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/1fYFjS6dxqE9rz338H0mR2D36LSefrAaC/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_4/arch_ex_4_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_4/arch_ex_4_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_4/arch_ex_4_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_4/arch_ex_4_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_4/arch_ex_4_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "社 - 模塊化自給生活單元",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/184xYS5ENWFbMZFIeQMY1Qr489wBx1lLW/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_5/arch_ex_5_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_5/arch_ex_5_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_5/arch_ex_5_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_5/arch_ex_5_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_5/arch_ex_5_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "加木家 - 台中育賢社會住宅樹屋設計",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/1MoPBEZzXOb2vBTW3wQMF1mtW3-O56xfk/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_6/arch_ex_6_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_6/arch_ex_6_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_6/arch_ex_6_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_6/arch_ex_6_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_6/arch_ex_6_5.png`,

                },
                //-------
                {
                    id: -1,
                    title: "巷變/相變 - 台南水色藝術工坊新館設計",
                    category: "Design",
                    text: "本專案為大學二年級下學期最後一次設計課作品，這次設計延續上一次設計對於校園環境的考察分析，要求我們必須自己挑選開設的商店種類並根據周遭的環境進行設計。由於台科較缺少輕食與飲料的複合商鋪，又缺少農學園藝相關科系，因此我決定設計一間能採收蔬果的輕食沙拉果汁店提供學生特殊且健康的飲食體驗。基地選擇上我選擇了台科僅有的兩個餐廳之間，且正對於學生宿舍的區域。透過動線分析建立基本的用餐動線和分區規劃，以可攀上的屋頂形塑梯田景觀並保留原先的人流動線，再由原生的植栽和蔬果養殖箱塑造天井以及具有私密性的用餐區，充分滿足學生從早到晚不論是飲食或者休閒的需求。",
                    tools: "SketchUp VRay illustrator Pages AutoDesk PhotoShop Rhino",
                    year: "2019",
                    downloadlink: "https://drive.google.com/file/d/1dRlYCRK6Njelu_ZTYjMCMeoQmmqfKI3j/view?usp=sharing",
                    pictureone: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_7/arch_ex_7_1.png`,
                    picturetwo: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_7/arch_ex_7_2.png`,
                    picturethree: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_7/arch_ex_7_3.png`,
                    picturefour: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_7/arch_ex_7_4.png`,
                    picturefive: `http://${process.env.REACT_APP_API_ADDRESS}/static/backup/arch_ex_7/arch_ex_7_5.png`,

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