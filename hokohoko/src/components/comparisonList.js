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
              <ProductList />
            </Accordion>


          </div>
        </Container>
      </div>
    );
  }
}

export default comparisonList;
