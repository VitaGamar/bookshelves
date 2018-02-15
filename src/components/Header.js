import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to='/'>Bookshelves</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/books'>Books</NavLink></li>
      </ul>
  </header>
);
export default Header;
