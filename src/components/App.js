import React, { Component, PropTypes } from 'react';
import { RouteTransition } from 'react-router-transition';
import Header from 'Header';
import SideBar from './sidebar/SideBar';
import spring from 'react-motion/lib/spring';
import '../Styles.css';

const popConfig = { stiffness: 360, damping: 30 };

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <SideBar />
          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ scale: 0.8, opacity: 0 }}
            atLeave={{ scale: spring(0.8, popConfig), opacity: spring(0, popConfig) }}
            atActive={{ scale: spring(1, popConfig), opacity: 1 }}
            mapStyles={styles => ({
              position: 'absolute',
              width: '100%',
              opacity: styles.opacity,
              transform: `scale(${styles.scale})`
            })}
          >
            {this.props.children}
          </RouteTransition>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object
};

export default App;
