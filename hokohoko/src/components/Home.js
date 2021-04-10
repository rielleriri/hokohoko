import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import ProductList from './ProductList';
import { Accordion } from "react-bootstrap";


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
        <div className='item-container'>
          <br />
          {items}
          <Accordion defaultActiveKey="">
              <ProductList />
          </Accordion>
        </div>
      </div>
    );
  }
}

export default Home;