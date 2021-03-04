import React from 'react'
import "./Header.css";

//jasmine
function Header() {
    return (
        <div className = "header">
            <div className = "header__back">
                <a>Back</a>
            </div>
            <div className = "header__name">
                <span className = "header__line">Results</span>
            </div>
        </div>
    )
}

export default Header
