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
      isManager: true,
    }
    this.handleJWTChange(this.handleJWTChange.bind(this))
    this.handleIsManagerChange(this.handleIsManagerChange.bind(this))
    this.logout(this.logout.bind(this))
  }

  handleJWTChange = (jwt) => {
    this.setState({ jwt: jwt })
  }

  handleIsManagerChange = (isManager) => {
    this.setState({ isManager: isManager })
  }

  logout = () => {
    console.log("do log out from header")
    this.setState({ jwt: "" })
    window.localStorage.removeItem("jwt")
  }


  render() {
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

            <Route path="/work/:id" component={Work}>
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

            <Route path="/signin" component={(props) => <Signin {...props} handleJWTChange={this.handleJWTChange} handleIsManagerChange={this.handleIsManagerChange} />}>
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

