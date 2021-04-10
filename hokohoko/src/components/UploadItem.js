import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createWorker } from 'tesseract.js';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comparison from './Comparison';

class UploadItem extends Component {
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

    
    if(/[$]/g.test(text)) {
        this.setState({
        isProcessing: false,
        ocrText: /([A-Z0-9,.$]+)/.exec(/((?:[\s\S](?!\$))+$)/.exec(text)[1])[1],
        platform: '',
        })
        //this.state.ocrText.id = "input2"

    } else{
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

// Modal Popup
state = {
    all: []
}

handlePriceChange = price => {
    this.setState({ price })
  }

handlePlatformChange = platform => {
    this.setState({ platform })
  }

handleChange = (e) => this.setState({ all: [...this.state.all, e.target.value]})

//when user click "Upload", push data to the list page
onUpload(e) {
    e.preventDefault();
    this.props.location.onUpload(e);
    this.props.history.push('/');
}

render() {
    return (
        <div>

            <Link className='form-child-small back-link' to='/'>
                Cancel
            </Link>
            <h3>Add a new comparison:</h3>
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


                    <div className="ocr-text">

                    </div>
                    </div>

                </div>
                <div class="card-body">
                    
                         <div className='form-container'>
                            <form className='form-child-big' onChange={this.handleChange} onSubmit={this.onUpload} value={this.state.all} placeholder="Platform" >
                                <input maxLength='25' placeholder='Enter Platform'/>
                                <button>Update</button>
                            </form>
                         </div>
                        <Comparison 
                        price={this.state.ocrText} 
                        onPriceChange={this.handlePriceChange} 
                        platform={this.state.platform}  
                        onPlatformChange={this.handlePlatformChange}
                        />
                        <div id="all">
                            all:

                        </div>
                </div>
            </div>
        );
    }
}

export default UploadItem;