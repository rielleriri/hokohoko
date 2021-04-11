import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from './Item';


class Home extends Component {


  renderNested = (row,i) => {
    return (
      <div key={i}>
        {this.renderNested}
      </div>
    )
  }

  render() {
    let items = this.props.items.map((item) => {
      return (
        <Item className='item-child'
          key={item.id}
          item={item}
          price={item.price}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
          onUpload={this.props.onUpload}
        />
      );
    });

    return (
      <div>
        <h1>Your product lists:</h1>
        <br />
        <Link className= "add-product" to='/add'>
          <Button variant="dark">Add New Product</Button>        
        </Link>
        <div className='item-container'>
          <br />
          {items}
        </div>
      </div>
    );
  }
}

export default Home;