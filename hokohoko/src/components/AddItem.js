// React
import { React, Component } from 'react';
// Others
import { Button, Form, Modal } from 'react-bootstrap';
// Components

// CSS
import '../styles.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);

    this.state = {
      isOpen: false,
      itemName: ''
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  onAdd(e) {
    this.props.onAdd(e);
    // this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Button className="float-right" variant="primary" onClick={this.openModal}>
          <b>+</b>
        </Button>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add A New Product Comparison</Modal.Title>
          </Modal.Header>

          <Form onSubmit={this.onAdd}>
            <Modal.Body>
              <Form.Group controlId="itemName">
                <Form.Label><b>Product Name</b></Form.Label>
                <Form.Control name="itemName" placeholder="Enter product name here" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Form.Group>
                <Button type="submit" variant="success" onClick={this.closeModal}>
                  Confirm
                </Button>
              </Form.Group>
              <Form.Group>
                <Button variant="danger" onClick={this.closeModal}>
                  Close
                </Button>
              </Form.Group>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddItem;