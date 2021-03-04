import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

export default class CircularButton extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            left: props.left,
            top: props.top,
            icon: props.icon
        }
    }

    render() {

        const myStyle = {
            position: "absolute",
            width: "60px",
            height: "60px",
            left: this.state.left,
            top: this.state.top,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            background: "#19B09F",
            boxSizing: "border-box",
            boxShadow: "0px 10px 30px rgba(64, 191, 255, 0.24)",
            borderRadius: "60px",
        };

        var icon = <FontAwesomeIcon icon={faPlus} size="lg" color="white" />

        if (this.state.icon === "faPen") {
            icon = <FontAwesomeIcon icon={faPen} size="lg" color="white" />
        } 

        if (this.state.icon === "faCheck") {
            icon = <FontAwesomeIcon icon={faCheck} size="lg" color="white" />
        } 

        if (this.state.icon === "faTimes") {
            icon = <FontAwesomeIcon icon={faTimes} size="lg" color="white" />
        } 

        return (
            <button style={myStyle}>
                {icon}
            </button>
        );
    }
}


