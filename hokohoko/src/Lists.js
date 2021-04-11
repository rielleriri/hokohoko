// React
import { React, Component } from 'react';
// Others
import { Accordion, Container } from 'react-bootstrap';
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
                    platform={item.platform}
                    onUpload={this.props.onUpload}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                    onSelect={this.props.onSelect}
                />
            );
        });


        return (
            <Container fluid>
                <h3>Your Product Lists</h3>
                <AddItem onAdd={this.props.onAdd}/>
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