import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.item);
  }

  onEdit(e) {
    e.preventDefault();
    let newItem = this.props.item;
    if (e.target[0].value.length !== 0) {
      newItem.name = e.target[0].value;
      newItem.price = e.target[1].price;
      newItem.platform = e.target[2].platform;
      this.props.onEdit(newItem);
    }
  }

  onUpdate(e) {
    e.preventDefault();
    let newItem = this.props.item;
    if (e.target[0].value !== "Error") {
      newItem.price = e.target[1].price;
      this.props.onUpdate(newItem);

    }
  }

  render() {
    return (
      <div className='three-container'>
        <div className='name three-child'>{this.props.item.name}</div>
        <div className='price three-child'>{this.props.item.price}</div>
        <div className='platform three-child'>{this.props.item.platform}</div>
        <div className='delete three-child'>
          <button onClick={this.onDelete}>Delete</button>
        </div>
        <div className='edit three-child'>
          <Link className='edit-link' to={{
            pathname: `/edit_item/${this.props.item.id}`,
            name: this.props.item.name,
            price: this.props.item.price,
            platform: this.props.item.platform,
            onEdit: this.onEdit
          }}>
            Edit
          </Link>
        </div>
      </div>
    );
  }
}

export default Item;

