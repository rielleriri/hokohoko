import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.item);
  }

  onEdit(e) {
    e.preventDefault();
    let newItem = this.props.item;
    if (e.target[0].value.length !== 0) {
      newItem.name = e.target[0].value;
      //newItem.price = ['Platform', 43]
      this.props.onEdit(newItem);
    }
  }

  onUpload(e) {
    e.preventDefault();
    let newItem = this.props.item;
    if (e.target[0].value.length !== 0) {
      newItem.price = e.target[0].value;
      this.props.onUpload(newItem);
    };
  }


  render() {
    return (
      <div className='five-container'>
        <div className='name five-child'>{this.props.item.name}</div>
        <div className='price five-child'>{this.props.item.price.split( '~' ).map( ( item ) => <> { item } <br /> </>) }</div>
        <div className='delete five-child'>
          <button onClick={this.onDelete}>Delete</button>
        </div>
        <div className='edit five-child'>
          <Link className='edit-link' to={{
            pathname: `/edit_item/${this.props.item.id}`,
            name: this.props.item.name,
            price:this.props.item.price,
            onEdit: this.onEdit
          }}>
            Edit
          </Link>
        </div>
        <div className='upload five-child'>
          <Link className='upload-link' to={{
            pathname: `/upload_item/${this.props.item.id}`,
            name: this.props.item.name,
            price: this.props.item.price,
            onUpload: this.onUpload
          }}> 
          Upload
          </Link>
        </div>
      </div>
    );
  }
}

export default Item;