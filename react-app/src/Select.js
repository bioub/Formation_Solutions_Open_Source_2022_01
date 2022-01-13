import styles from './Select.module.css';

import React, { Component } from 'react';

export class Select extends Component {
  state = {
    items: ['Toto', 'Titi', 'Tata'],
    selected: 'Toto',
    menuOpen: false,
  };
  handleClickSelected = () => {
    const menuOpen = this.state.menuOpen;
    this.setState({
      menuOpen: !menuOpen,
    });
  };
  handleClickItem = () => {};
  render() {
    const { items, selected, menuOpen } = this.state;

    // const itemsJsx = [];

    // for (const item of items) {
    //   itemsJsx.push(<div className="item">{item}</div>);
    // }

    // Tableau d'origine => appliquer une fonction de transformation => tableau résultant
    // [
    //   'Toto', => (item) => <div className="item">{item}</div> => <div className="item">Toto</div>
    //   'Titi', => (item) => <div className="item">{item}</div> => <div className="item">Tata</div>
    //   'Tata',  => (item) => <div className="item">{item}</div> => <div className="item">Titi</div>
    // ]

    const itemsJsx = items.map((item) => <div className="item" key={item}>{item}</div>)

    return (
      <div className="Select">
        <div onClick={this.handleClickSelected}>{selected}</div>
        {menuOpen && <div className={styles.menu}>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
