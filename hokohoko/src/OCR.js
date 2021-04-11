import React, { Component } from 'react';
import { createWorker } from 'tesseract.js';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row, Col } from "react-bootstrap";

import { Link } from 'react-router-dom';


registerPlugin(FilePondPluginImagePreview);

class OCR extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isProcessing: false,
            ocrText: '',
            platform: '',
            pctg: '0.00'
        }
        this.pond = React.createRef();
        this.worker = React.createRef();
        this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }
    // OCR
    async doOCR(file) {
        this.setState({
            isProcessing: true,
            ocrText: '',
            platform: '',
            pctg: '0.00'
        })
        // Loading tesseract.js functions
        await this.worker.load();
        // Loadingg language as 'English'
        await this.worker.loadLanguage('eng');
        await this.worker.initialize('eng');
        // Sending the File Object into the Recognize function to
        // parse the data
        const { data: { text } } = await this.worker.recognize(file.file);

        if (/[$]/g.test(text)) {
            this.setState({
                isProcessing: false,
                ocrText: /([A-Z0-9,.$]+)/.exec(/((?:[\s\S](?!\$))+$)/.exec(text)[1])[1],
                platform: '',
            })
        } else {
            this.setState({
                isProcessing: false,
                ocrText: 'Error',
                platform: '',
            })
        }


    };
    updateProgressAndLog(m) {

        // Maximum value out of which percentage needs to be
        // calculated. In our case it's 0 for 0 % and 1 for Max 100%
        // DECIMAL_COUNT specifies no of floating decimal points in our
        // Percentage
        var MAX_PARCENTAGE = 1;
        var DECIMAL_COUNT = 2;

        if (m.status === "recognizing text") {
            var pctg = (m.progress / MAX_PARCENTAGE) * 100
            this.setState({
                pctg: pctg.toFixed(DECIMAL_COUNT)
            })

        }
    }
    componentDidMount() {
        // Logs the output object to Update Progress, which
        // checks for Tesseract JS status & Updates the progress
        this.worker = createWorker({
            logger: m => this.updateProgressAndLog(m),
        });

    }

    //when user click "Upload", push data to the list page
    onUpload(e) {
        this.props.onUpload(e);
        this.props.history.push('/');
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Add A New Comparison</h3>
                        <p>Upload a screenshot of a product checkout page!</p>
                    </Col>
                    <Col>
                        <Link className='float-right form-child-small back-link' to='/'>
                            <Button>Back</Button>
                    </Link>
                    </Col>
                </Row>

                <hr />

                <div className="App">
                    <div className="container">
                        <div style={{ marginTop: "10%" }} className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <FilePond ref={ref => this.pond = ref}
                                    onaddfile={(err, file) => {
                                        this.doOCR(file);

                                    }}
                                    onremovefile={(err, fiile) => {
                                        this.setState({
                                            ocrText: ''
                                        })
                                    }}
                                />
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">
                                <div style={{ margin: "1%", textAlign: "left" }} className="row">
                                    <div className="col-md-12">
                                        <i className={"fas fa-sync fa-2x " + (this.state.isProcessing ? "fa-spin" : "")}></i> <span className="status-text">{this.state.isProcessing ? `Processing Image ( ${this.state.pctg} % )` : "Parsed Text"} </span>
                                    </div>

                                </div>

                            </h5>
                            <div class="card-body">
                                <p class="card-text">{(this.state.isProcessing) ?
                                    '...........'
                                    : this.state.ocrText.length === 0 ? "No Valid Text Found / Upload Image to Parse Text From Image" : this.state.ocrText}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <Form onSubmit={this.onUpload}>
                        <Form.Group controlId="platform">
                            <Form.Label><b>Platform Name</b></Form.Label>
                            <Form.Control type='input' onChange={this.handleChange} name="platform" placeholder="Enter platform name here" value={this.state.name} />
                        </Form.Group>
                        <Form.Group controlId="endPrice">
                            <Form.Label><b>End Price</b></Form.Label>
                            <Form.Control disabled type='input' name="endPrice" placeholder="The end price will automatically appear here" value={this.state.ocrText} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" variant="success" onSubmit={this.onUpload}>
                                Confirm
                            </Button>
                        </Form.Group>
                    </Form>
                </div>



            </Container>
        );
    }
}


export default OCR;