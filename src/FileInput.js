import React, { useEffect, useState, Component } from 'react';
import { createWorker } from 'tesseract.js';

export default class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            text: <p>Hi</p>
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            text: PerformOCR(this.fileInput.current.files[0])
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload screenshot:
                    <input type="file" ref={this.fileInput} />
                </label>
                <br/>
                <button type="submit">Submit</button>
                <div class="a">{this.state.text}</div>
            </form>
        );
    }
}

function PerformOCR(url) {
    const worker = createWorker({
      logger: m => console.log(m),
    });
    var ocr = ""
    const doOCR = async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(url);
      console.log(text);
      ocr = text;
    };
    //const [ocr, setOcr] = useState('Recognizing...');
    //useEffect(() => {
      doOCR();
    //});
    return (
      <p>{ocr}</p>
    );
  }