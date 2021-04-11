// React
import { React, Component } from 'react';
import { Link } from 'react-router-dom';
// Others
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
// Components

// CSS
import '../styles.css';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(e) {
        this.props.location.onEdit(e);
        this.props.history.push('/');
    }

    render() {
        return (
            <Container fluid>

                <Row>
                    <Col>
                        <h3>Edit Product Name</h3>
                    </Col>
                    <Col>
                        <Link className='form-child-small back-link' to='/'>
                            <Button className="float-right" variant="primary">
                                Back
                        </Button>
                        </Link>
                    </Col>
                </Row>
                <hr />

                <Form className='form-child-big' onSubmit={this.onEdit}>
                    <Row>
                        <Col lg ={4} md={8} xs={8}>
                            <Form.Group>
                                <Form.Control
                                    maxLength='25'
                                    placeholder='Type name here'
                                    defaultValue={this.props.location.name}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Button type="submit" variant="success">Update</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

            </Container>
        );
    }
}

export default EditItem;