import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import Header from './components/ui-components/Header';
import Navbar from './components/ui-components/Navbar';
import Footer from './components/ui-components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';
import './App.css';
import Signin from './components/Signin';
import Work from './components/Work';
import Signup from './components/Signup';
import ManageArticles from './components/ManageArticles';
import ManageComments from './components/ManageComments';
import TimelinePage from './components/TimelinePage';
import EditArticle from './components/EditArticle';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jwt: "",
      email: "",
      isManager: false,
      API_IP: process.env.REACT_APP_API_ADDRESS,
    }
    this.handleJWTChange(this.handleJWTChange.bind(this))
    this.handleIsManagerChange(this.handleIsManagerChange.bind(this))
    this.handleMemberID(this.handleMemberID.bind(this))
    this.updateItemFromLocalStroage(this.updateItemFromLocalStroage.bind(this))
    this.logout(this.logout.bind(this))
  }

  componentDidMount() {
    let t = window.localStorage.getItem("jwt")
    if (t) {
      if (this.state.jwt === "") {
        this.setState({ jwt: JSON.parse(t) })
      }
    }
    let i = window.localStorage.getItem("email")
    if (i) {
      if (this.state.email === "") {
        this.setState({ email: JSON.parse(i) })
      }
    }
    let is = window.localStorage.getItem("isManager")
    if (is) {
      console.log("manager")
      if (JSON.parse(is) == 1) {
        this.setState({ isManager: 1 })
      }
    }
  }



  handleJWTChange = (jwt) => {
    this.setState({ jwt: jwt })
  }

  handleIsManagerChange = (isManager) => {
    this.setState({ isManager: isManager })
  }

  handleMemberID = (memberID) => {
    this.setState({ memberID: memberID })
  }

  updateItemFromLocalStroage = () => {
    let t = window.localStorage.getItem("jwt")
    if (t) {
      if (this.state.jwt === "") {
        this.setState({ jwt: JSON.parse(t) })
      }
    }
    let i = window.localStorage.getItem("email")
    if (i) {
      if (this.state.email === "") {
        this.setState({ email: JSON.parse(i) })
      }
    }
    let is = window.localStorage.getItem("isManager")
    if (is) {
      console.log("manager")
      if (JSON.parse(is) == 1) {
        this.setState({ isManager: 1 })
      }
    }
  }

  logout = () => {
    console.log("do log out from header")
    this.setState({ jwt: "" })
    this.setState({ memberID: "" })
    this.setState({ isManager: false })
    window.localStorage.removeItem("jwt")
    window.localStorage.removeItem("memberID")
    window.localStorage.removeItem("isManager")
    window.localStorage.removeItem("email")

  }


  render() {
    // let API_Ip = process.env.GO_APP_HOST_IP_ADDRESS
    // if (API_Ip === undefined) {
    //   this.setState({ API_IP: 'http://localhost:4000' })

    // }
    console.log(this.state.API_IP)

    console.log(this.state.isManager)
    console.log(this.state.memberID)
    console.log(this.state.jwt)
    // this.updateItemFromLocalStroage()
    return (
      <Router>
        <div className="App">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet"></link>
          <div className='container'>
            <Header isManager={this.state.isManager} jwt={this.state.jwt} logout={this.logout} API_IP={this.state.API_IP} />
            <Navbar />
          </div>
          <Switch>

            {/* <Route path="/work/:id" component={Work}>
            </Route> */}

            <Route path="/work/:id" component={(props) => <Work {...props} email={this.state.email} jwt={this.state.jwt} API_IP={this.state.API_IP} />}>
            </Route>

            <Route path="/search/:value" component={Search} key={this.state.current} API_IP={this.state.API_IP}>
            </Route>

            <Route path="/search" component={Search} API_IP={this.state.API_IP}>
            </Route>
            {/* 
            <Route path="/edit/article/:id" component={EditArticle}>
            </Route>

            <Route path="/edit/article" component={EditArticle}>
            </Route>

            <Route path="/manage/comments" component={ManageComments}>
            </Route>

            <Route path="/manage/articles" component={ManageArticles}>
            </Route>

            <Route path="/manage" component={ManageArticles}>
            </Route> */}

            <Route path="/edit/article/:id" component={(props) => <EditArticle {...props} isManager={this.state.isManager} jwt={this.state.jwt} API_IP={this.state.API_IP} />}>
            </Route>

            <Route path="/edit/article" component={(props) => <EditArticle {...props} isManager={this.state.isManager} jwt={this.state.jwt} API_IP={this.state.API_IP} />}>
            </Route>

            <Route path="/manage/comments" component={(props) => <ManageComments {...props} isManager={this.state.isManager} jwt={this.state.jwt} API_IP={this.state.API_IP} />}>
            </Route>

            <Route path="/manage/articles" component={(props) => <ManageArticles {...props} isManager={this.state.isManager} jwt={this.state.jwt} API_IP={this.state.API_IP} />}>
            </Route>

            <Route path="/manage" component={(props) => <ManageArticles {...props} isManager={this.state.isManager} jwt={this.state.jwt} API_IP={this.state.API_IP} />}>
            </Route>

            <Route path="/signin" component={(props) => <Signin {...props} handleJWTChange={this.handleJWTChange} handleIsManagerChange={this.handleIsManagerChange} handleMemberID={this.handleMemberID} API_IP={this.state.API_IP} updateItemFromLocalStroage={this.updateItemFromLocalStroage} />}>
            </Route>

            <Route path="/signup" component={Signup} API_IP={this.state.API_IP}>
            </Route>

            <Route path="/timeline" component={TimelinePage}>
            </Route>

            <Route path="/" component={Home}>
            </Route>

            <Route path="*" component={NotFound}>
            </Route>


          </Switch>
          <Footer />

        </div>
      </Router >

    )
  }
}

