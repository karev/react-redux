import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Svg from '../Svg/Svg';
import './header.css';

const Header = (props) => {
  return (
    <nav className="header">
      <Svg icon="alarm" className="test" />
      <IndexLink to="/" activeClassName="active">Accueil</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
