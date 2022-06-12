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
import EditArticle from './components/EditArticle';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jwt: "",
      memberID: "",
      isManager: false,
    }
    this.handleJWTChange(this.handleJWTChange.bind(this))
    this.handleIsManagerChange(this.handleIsManagerChange.bind(this))
    this.handleMemberID(this.handleMemberID.bind(this))
    this.logout(this.logout.bind(this))
  }

  componentDidMount() {
    let t = window.localStorage.getItem("jwt")
    if (t) {
      if (this.state.jwt === "") {
        this.setState({ jwt: JSON.parse(t) })
      }
    }
    let i = window.localStorage.getItem("memberID")
    if (i) {
      if (this.state.memberID === "") {
        this.setState({ memberID: JSON.parse(i) })
      }
    }
    let is = window.localStorage.getItem("isManager")
    if (is) {
      if (JSON.parse(is) === true) {
        this.setState({ isManager: true })
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

  logout = () => {
    console.log("do log out from header")
    this.setState({ jwt: "" })
    this.setState({ memberID: "" })
    this.setState({ isManager: false })
    window.localStorage.removeItem("jwt")
    window.localStorage.removeItem("memberID")
    window.localStorage.removeItem("isManager")

  }


  render() {
    console.log(this.state.isManager)
    console.log(this.state.memberID)
    console.log(this.state.jwt)
    return (
      <Router>
        <div className="App">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet"></link>
          <div className='container'>
            <Header isManager={this.state.isManager} jwt={this.state.jwt} logout={this.logout} />
            <Navbar />
          </div>
          <Switch>

            {/* <Route path="/work/:id" component={Work}>
            </Route> */}

            <Route path="/work/:id" component={(props) => <Work {...props} memberID={this.state.memberID} />}>
            </Route>

            <Route path="/search/:value" component={Search}>
            </Route>

            <Route path="/search" component={Search}>
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

            <Route path="/edit/article/:id" component={(props) => <EditArticle {...props} isManager={this.state.isManager} />}>
            </Route>

            <Route path="/edit/article" component={(props) => <EditArticle {...props} isManager={this.state.isManager} />}>
            </Route>

            <Route path="/manage/comments" component={(props) => <ManageComments {...props} isManager={this.state.isManager} />}>
            </Route>

            <Route path="/manage/articles" component={(props) => <ManageArticles {...props} isManager={this.state.isManager} />}>
            </Route>

            <Route path="/manage" component={(props) => <ManageArticles {...props} isManager={this.state.isManager} />}>
            </Route>

            <Route path="/signin" component={(props) => <Signin {...props} handleJWTChange={this.handleJWTChange} handleIsManagerChange={this.handleIsManagerChange} handleMemberID={this.handleMemberID} />}>
            </Route>

            <Route path="/signup" component={Signup}>
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

