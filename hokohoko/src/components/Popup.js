import { React, Component } from 'react';
import { Alert, Button, Form, Modal } from "react-bootstrap";

class Popup extends Component {

    state = {
        name: null
    }

    handleChange = (e) => this.setState({ name: e.target.value})

    render() {
        return (
            <div>
                <Modal
                    show={this.props.isOpen}
                    onHide={this.props.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group >
                            <Form.Label>Enter the name of the platform that the screenshot is from: </Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="Platform" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
                            Submit
                        </Button>
                        <Button variant="danger" onClick={this.props.closeModal}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Popup;