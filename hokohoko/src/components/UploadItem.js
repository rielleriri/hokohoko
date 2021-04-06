import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addNewComparison from './addNewComparison';

class UploadItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e) {
    this.props.location.onUpdate(e);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='form-container'>
        <addNewComparison />
        <form className='form-child-big' onSubmit={this.onUpdate}>
          <input
            maxLength='25'
            placeholder='Edit item price'
            defaultValue={this.props.location.price}
          /><button>Update</button>
          <br />
          <input
            maxLength='25'
            placeholder='Edit item platform'
            defaultValue={this.props.location.platform}
          /><button>Update</button>
        </form>
        <Link className='form-child-small back-link' to='/'>Back</Link>
      </div>
    );
  }
}

export default UploadItem;