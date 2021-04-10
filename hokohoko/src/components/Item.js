import React, { Component } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
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
      newItem.price += "~" + e.target[0].value;
      this.props.onUpload(newItem);
    };
  }


  render() {
    return (
      <div>
      <div className='five-container'>
        <div className='name five-child'>{this.props.item.name}</div>
        <div className='price five-child'>{this.props.item.price.split( '~' ).map( ( item ) => <> { item } {" "} </>) }</div>
        
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
          
        </div>
      </div>
      <div>
        <Accordion defaultActiveKey="">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.item.id.toString()}>
              {this.props.item.name}
              <button onClick={this.onDelete}>Delete</button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.item.id.toString()}>
              <Card.Body>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Blank</th>
                      <th>
                        Platform
                        </th>
                      <th>
                        End Price
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.item.price.split('*').map((platformprice) => {
                        return <tr>{platformprice.split('~').map((item)=>{return <td>{item}</td>})}</tr>;
                    })}

                  </tbody>

                </Table>
                <Link className='upload-link' to={{
                    pathname: `/upload_item/${this.props.item.id}`,
                    name: this.props.item.name,
                    price: this.props.item.price,
                    onUpload: this.onUpload
                  }}> 
                  Upload
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
        </div>
    );
  }
}

export default Item;