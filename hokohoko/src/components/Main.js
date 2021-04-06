import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddItem from './AddItem';
import EditItem from './EditItem';
import UploadItem from './UploadItem';
import addNewComparison from './addNewComparison';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => {
            return <Home 
              items={this.props.items}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              {...props} />;
          }} />
          <Route path='/add' render={(props) => {
            return <AddItem onAdd={this.props.onAdd} {...props} />
          }} />
          <Route path='/edit_item/:id' component={EditItem} />
          <Route path='/new' component={addNewComparison} />
        </Switch>
      </main>
    );
  }
}

export default Main;