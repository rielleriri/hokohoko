import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(e) {
    this.props.location.onEdit(e);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='form-container'>
        <form className='form-child-big' onSubmit={this.onEdit}>
          <input
            maxLength='25'
            placeholder='Type name here'
            defaultValue={this.props.location.name}
          />
          <br />
          <input
            maxLength='25'
            placeholder='Type price here'
            defaultValue={this.props.location.price}
          />
          <br />
          <button>Update</button>
        </form>
        <Link className='form-child-small back-link' to='/'>Back</Link>
      </div>
    );
  }
}

export default EditItem;