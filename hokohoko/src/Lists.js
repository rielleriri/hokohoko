// React
import { React, Component } from 'react';
// Others
import { Accordion, Container, Row, Col } from 'react-bootstrap';
// Components
import AddItem from './components/AddItem';
import Item from './components/Item';
// CSS
import './styles.css';

class Lists extends Component {

    render() {
        let items = this.props.items.map((item) => {
            return (
                <Item className='item-child'
                    key={item.id}
                    item={item}
                    price={item.price}
                    platforms={item.platforms.sort((a, b) => (a.end_price > b.end_price) ? 1 : -1)}
                    onUpload={this.props.onUpload}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                    onSelect={this.props.onSelect}
                />
            );
        });


        return (
            <Container fluid>
                <Row>
                    <Col xs={9}>
                        <h3>Your Product Lists</h3>
                        <p>Add a new product or select an existing one to begin comparing!</p>
                    </Col>
                    <Col>
                        <AddItem onAdd={this.props.onAdd}/>
                    </Col>
                </Row>
                
                {/* Page break */}
                <hr />
                <Accordion defaultActiveKey="">
                    {items}
                </Accordion>


            </Container>
        );
    }
}

export default Lists;