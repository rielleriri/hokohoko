import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import addNewComparison from './components/addNewComparison';
import comparisonList from './components/comparisonList';

class App extends Component {
    render() {
      return (
      <Router>
          <div>
            <h2>HokoHoko</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/list'} className="nav-link">Lists</Link></li>
              <li><Link to={'/new'} className="nav-link">Add New Comparison</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/list' component={comparisonList} />
                <Route path='/new' component={addNewComparison} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  
export default App;