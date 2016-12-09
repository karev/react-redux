import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './header.css';

const Header = (props) => {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Accueil</IndexLink>
      <Link to="about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
