import React, { Component, PropTypes } from 'react';
import Header from 'Header/Header';
import SideBar from './sidebar/SideBar';

class App extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header />
        <SideBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
