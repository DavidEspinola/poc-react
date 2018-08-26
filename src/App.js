import React, { Component } from 'react';
import AppLayout from './shell/AppLayout';
import { Route  } from 'react-router-dom';
import Users from './views/Users';
import Contact from './views/Contact';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Route exact path="/" component={Users}/>
        <Route path="/contacto" component={Contact}/>
      </AppLayout>
    );
  }
}

export default App;
