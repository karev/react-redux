import React, { Component } from 'react';
import Flickity from 'flickity';
import './Table.css';
import 'flickity/dist/flickity.min.css';

let inserted = false;

class ResponsiveTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    const carousel = this.refs.carousel;

    const options = {
      freeScroll: false,
      contain: true,
      prevNextButtons: true,
      groupCells: true,
      cellAlign: 'left'
    };

    this.flkty = new Flickity(carousel, options);
    this.flkty.on('cellSelect', this.updateSelected);
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.off('cellSelect', this.updateSelected);
      this.flkty.destroy();
      window.removeEventListener('resize', this.onWindowResize);
    }
  }

  updateSelected() {
    const index = this.flkty.selectedIndex;

    this.setState({
      selectedIndex: index
    });
  }

  onWindowResize() {
    const fixed = document.getElementsByClassName('table-fixed_column');
    const userTable = this.refs.userTable;

     if(window.innerWidth < 800 && !inserted){
        this.flkty.prepend(fixed);
        inserted = true;
    } else if (window.innerWidth > 800) {
      if (inserted) {
        for(let i = 0; i < fixed.length; i++) {
          fixed[i].removeAttribute("style");
          userTable.insertBefore(fixed[i], userTable.firstChild);
        }

        inserted = false;
      }
    }
    this.flkty.reloadCells();
    this.flkty.select(0);
  }

  render() {
      return (
        <div ref="userTable">
          {this.renderColumn('name', 'Nom', true)}
          {this.renderColumn('email', 'Email', true)}
          <div ref="carousel" className="table-scroll carousel">
            {this.renderColumn('password', 'Mot de passe')}
            {this.renderColumn('last_connexion', 'Derniere connexion')}
            {this.renderColumn('last_activity', 'Derniere activité')}
          </div>
        </div>
      );
  }
}

export default ResponsiveTable;
