import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import addNewComparison from './components/addNewComparison';
import comparisonList from './components/comparisonList';

class App extends Component {
  render() {
    return (
        <Router>
            <Navbar className="custom" bg="light" expand="sm">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/images/icon.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              Hokohoko
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link activeClassName="active" eventKey="/list" href="/list">Lists</Nav.Link>
                  <Nav.Link activeClassName="active" eventKey="/new" href="/new">New Comparison</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route exact path='/list' component={comparisonList} />
              <Route path='/new' component={addNewComparison} />
            </Switch>
        </Router>
    );
  }
}


export default App;