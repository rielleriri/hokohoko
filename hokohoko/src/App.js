import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <h3>HokoHoko</h3>
    <Link to="/">Lists</Link>
    <Link to="/new">New Comparison</Link>
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <p className="page-info">
      {props.title}:
    </p>
    <ul className={props.status}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>
  </div>
);

const ComparisonList = () => (
  <Template title="Lists" status="Lists"/>
);

const AddNewComparison = () => (
  <Template title="Add Comparison" status="Add"/>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ComparisonList}/>
          <Route path="/new" component={AddNewComparison}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;