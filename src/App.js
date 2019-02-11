import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import { Route, Link } from 'react-router-dom';

import Visuals from './components/Visuals/Visuals';
import Code from './components/Code/Code';

class App extends Component {
    render() {
    return (
      <div className="App">

        <header>
          <nav>
            <ul>
              <Link to="/visuales">
                Visuales
              </Link>

              <Link to="/codigo">
                Código
              </Link>

            </ul>
          </nav>
        </header>

        <main>
          <Route exact path="/visuales" component={Visuals}/>
          <Route exact path="/codigo" component={Code}/>
          
        </main>

      </div>
    );
  }
}

export default App;
