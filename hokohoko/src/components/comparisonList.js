import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button, FormControl, Row, Col } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";

class comparisonList extends Component {
  render() {
    return (
        <div>
          <h3>Your Lists</h3>
          <div>
    
    <Container fluid>
      <Accordion defaultActiveKey="">

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

      </Accordion>
    </Container>

  </div>
        </div>
    );
  }
}

export default comparisonList;