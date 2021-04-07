import { React, Component } from 'react';
import { Accordion, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';




class Product extends Component {
  constructor(props) {
    super(props)

    this.printname = this.printname.bind(this);
    this.test = this.printname();
  }

  printname() {
    this.props.platforms.forEach(element => {
      return element.name;

    });
  }


  render() {
    return (
      <div>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={this.props.id.toString()}>
            {this.props.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={this.props.id.toString()}>
            <Card.Body>

              <Card.Text>{this.props.description}</Card.Text>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>
                      Platform
                      </th>
                    <th>
                      End Price
                      </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.platforms.map(platform => {
                    return <tr>
                      <td>{platform.name}</td>
                      <td>{platform.end_price}</td>
                    </tr>;
                  })}

                </tbody>

              </Table>
              <Link to='/new'>
                <button type="button" className="btn btn-info">Upload</button>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}

export default Product;
