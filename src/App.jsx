import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <div className="App-header">
          <div className="App">
            <div className="text-wrap">
              <img className="iron-logo" src="images/ironhack-logo.svg" alt="IronhacLogo" />
              <h1>Say hello to ReactJS</h1>
              <p>Will learn a Frontend framework from scratch, to become a Nina Developer</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Awesome!
              </a>
            </div>
          </div>
        </div>

        <section className="links-box">
          <div className="box">
            <img className="image-box" src="images/icon1.png" alt="icon1" />
            <h5> Declarative</h5>
            <p> React makes it painless to create interactive UIs </p>
          </div>
          <div className="box">
            <img className="image-box" src="images/icon2.png" alt="icon2" />
            <h5>Components</h5>
            <p> Build encapsulated components that manage thier state </p>
          </div>
          <div className="box">
            <img className="image-box" src="images/icon3.png" alt="icon3" />
            <h5>Single-way</h5>
            <p>A ser of immutable values are passed to the component's </p>
          </div>
          <div className="box">
            <img className="image-box" src="images/icon4.png" alt="icon4" />
            <h5>JSX </h5>
            <p>Statically-tuped, designed to run on modern browsers </p>
          </div>
        </section>
      </header>
    );
  }
}

export default App;
