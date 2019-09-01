import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AdminPage from '../Admin/Admin';
// import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import AddNewCustomer from'./../UserPage/AddNewCustomer';
// import CustomerFile from './../UserPage/CustomerFile';
import ProjectPage from './../ProjectPage/ProjectPage';
import CustomerToolBar from './../CustomerToolBar/CustomerToolBar';

import './App.css';


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            {/* <ProtectedRoute
              exact
              path="/"
              component={UserPage}
            /> */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/home"
              component={AdminPage}
            />
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/newcustomer"
              component={AddNewCustomer}
            />
            <ProtectedRoute
              exact
              path="/updatecustomer/:id"
              component={AddNewCustomer}
            />
            <ProtectedRoute
              exact
              path="/file/:id"
              component={CustomerToolBar}
            />
            <ProtectedRoute
              exact
              path="/project"
              component={ProjectPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
