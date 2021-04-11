// React
import { React, Component } from 'react';
import { Link } from 'react-router-dom';
// Others
import { Accordion, Button, Card, Table } from 'react-bootstrap';

// Components

// CSS
import '../styles.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      id: 0
    }
  }

  onDelete() {
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <div>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={this.props.item.id.toString()} onClick={this.props.onSelect} id={this.props.item.id}>
            {this.props.item.name}
            <Link className="float-right" variant="outline-danger" onClick={this.onDelete}>Delete</Link>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={this.props.item.id.toString()}>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>
                      Platform
                    </th>
                    <th>
                      End Price
                    </th>
                    <th width="10%">
                      <div className="text-center">
                        <Link to='/new'>
                          <Button className="float-end" >Upload</Button>
                        </Link>

                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.item.platforms.map(platform => {
                    return <tr>
                      <td>{platform.name}</td>
                      <td>{platform.end_price}</td>
                      <td>
                        <div className="text-center">
                          <Button className="float-end" variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>;
                  })}

                </tbody>

              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}

export default Item;