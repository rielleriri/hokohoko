import { React, Component } from 'react';
import {Accordion, Card} from 'react-bootstrap';



class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          name: ''
        };
      }

    render() {
        return (
            <div>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.state.id.toString()}>
                {this.state.name}
              </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.state.id.toString()}>
                  <Card.Body>

                    <Card.Text>{this.state.name}</Card.Text>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
        );
    }
}

export default Product;