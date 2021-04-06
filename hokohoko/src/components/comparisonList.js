import { React, Component } from 'react';
import { Accordion, Card, Container } from "react-bootstrap";
import Comparison from "./Comparison";
import ProductList from './ProductList';


class comparisonList extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <h3>Your Lists</h3>
          <div>


            <Accordion defaultActiveKey="">
              {/* 
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  iPad Pro
              </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>

                    <Card.Text>iPad Pro</Card.Text>
                    <Button variant="custom">View</Button>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  LG TV
              </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>

                    <Card.Text>64-Inch LG TV</Card.Text>
                    <Button variant="custom">View</Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
 */}
              <ProductList />
            </Accordion>


          </div>
        </Container>
      </div>
    );
  }
}

export default comparisonList;
