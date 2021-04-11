// React
import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Others

// Components
import Lists from '../Lists';
import AddItem from './AddItem';

import OCR from '../OCR';
// CSS
import '../styles.css';

class Router extends Component {
    render() {
        return (
          <main>
            <Switch>
              <Route exact path='/' render={(props) => {
                return <Lists 
                  items={this.props.items}
                  onAdd={this.props.onAdd}
                  onDelete={this.props.onDelete}
                  onEdit={this.props.onEdit}
                  onUpload={this.props.onUpload}
                  onSelect={this.props.onSelect}
                  onPlatformDelete={this.props.onPlatformDelete}
                  {...props} />;
              }} />
              <Route path='/add' render={(props) => {
                return <AddItem onAdd={this.props.onAdd} {...props} />
              }} />
              {/* <Route path='/edit_item/:id' component={EditItem} /> */}
              <Route path='/new' render={(props) => {
                return <OCR onUpload={this.props.onUpload} {...props} />
              }} />
            </Switch>
          </main>
        );
      }
}

export default Router;