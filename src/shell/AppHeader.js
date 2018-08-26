import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './AppHeader.css';
import logo from './logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <header className="AppHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="AppHeader-container">
          <h1 className="App-title">Prueba de concepto con React</h1>
          <nav>
            <NavLink to="/" exact activeClassName='AppHeader-active'>Usuarios</NavLink> |&nbsp;
            <NavLink to="/contacto" activeClassName='AppHeader-active'>Contacto</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default AppHeader;