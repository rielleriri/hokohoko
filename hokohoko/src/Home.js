import React from 'react'
import logo from './logo.svg';

function Home() {
    return (
        <div className = "home">
            <div className = "home__logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className = "home__title">
                <p>HokoHoko</p>
            </div>
            
        </div>
    )
}

export default Home

