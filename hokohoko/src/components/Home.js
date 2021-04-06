import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
  render() {
    let items = this.props.items.map((item) => {
      return (
        <Item className='item-child'
          key={item.id}
          item={item}
          price={item.price}
          platform={item.platform}
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
          {items}
        </div>
      </div>
    );
  }
}

export default Home;