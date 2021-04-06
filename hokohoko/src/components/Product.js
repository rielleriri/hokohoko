import { React, Component } from 'react';
import {Accordion, Card} from 'react-bootstrap';

class Product extends Component {
  constructor(props) {
    super(props)
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

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
        );
    }
}

export default Product;