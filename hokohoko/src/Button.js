import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        this.state = {
            text: props.text,
            left: props.left,
            top: props.top
        }
    }

    render() {

        var text = this.state.text;

        const mystyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "16px",
            position: "absolute",
            width: "133px",
            height: "54px",
            left: this.state.left,
            top: this.state.top,
            background: "#19B09F",
            boxShadow: "0px 10px 30px rgba(64, 191, 255, 0.24)",
            borderRadius: "50px",
        };

        return (
            <button style={style}>
                {text}
            </button>
        );
    }
}


