import React, { Component, PropTypes } from 'react';
import Header from 'Header';
import SideBar from 'sidebar';
import '../Styles.css';

class App extends Component {
  render () {
    return (
      <div id="app">
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
