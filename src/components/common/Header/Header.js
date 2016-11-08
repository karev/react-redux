import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Accueil</IndexLink>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;
