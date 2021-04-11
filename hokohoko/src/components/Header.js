import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className='nav-container'>
            <li className='nav-child'>
              <Link className='nav-link' to='/'>HokoHoko</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;