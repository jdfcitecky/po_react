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


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet"></link>
          <div className='container'>
            <Header />
            <Navbar />
          </div>
          <Switch>
            <Route path="/search" component={Search}>
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

