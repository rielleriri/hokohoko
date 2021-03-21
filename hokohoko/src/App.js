import React, { Component, useState, useEffect, render } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, Button, FormControl, Row, Col } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

// const NavBar = () => (
//   <div className="navbar">
//     <h3>HokoHoko</h3>
//     <Link to="/">Lists</Link>
//     <Link to="/new">New Comparison</Link>
//   </div>
// );

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}


function UploadButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="success"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Uploading...' : 'Upload Screenshot'}
    </Button>
  );
}



const Template = (props) => (
  <div>

    <p className="page-info">
      {props.title}:
    </p>
    <ul className={props.status}>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
    <UploadButton />
    <p>
    The button only shows Uploading... when clicked, but does nothing for now
    </p>
    
  </div>
);

const Lists = (props) => (
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
);

const ComparisonList = () => (
  <Lists title="Lists" status="Lists" />
);

const AddNewComparison = () => (
  <Template title="Add Comparison" status="Add" />
);

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={ComparisonList} />
            <Route path="/new" component={AddNewComparison} />
          </div>
        </BrowserRouter>

        <Navbar className="justify-content-center" fixed="bottom">
          <Nav variant="pills" >
            <Nav.Link activeClassName="active" eventKey="/" href="/">Lists</Nav.Link>
            <Nav.Link activeClassName="active" eventKey="/new" href="/new">New Comparison</Nav.Link>
          </Nav>

        </Navbar>

      </div>


    );
  }
}

export default App;