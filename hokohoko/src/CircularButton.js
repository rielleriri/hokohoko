import React from 'react'

export default class CircularButton extends React.Component {
    constructor(props) {
        this.state = {
            left: props.left,
            top: props.top
        }
    }

    render() {

        var text = this.state.text;

        const myStyle = {
            position: "absolute",
            width: "60px",
            height: "60px",
            left: this.state.left,
            top: this.state.top,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        };

        return (
            <button style={myStyle}>
            </button>
        );
    }
}


