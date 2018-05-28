import React, { Component } from 'react';
import './App.css';

import Overview from './pages/overview.jsx';
import About from './pages/about.jsx';
import Experience from './pages/experience.jsx';
import Portfolio from './pages/portfolio.jsx';




class App extends Component {
  componentDidMount() {
    document.title = "Marisha Hoza"
  }

  render() {
    return (
      <div className="App">

        <Overview/>
        
        <About/>
        
        <Experience/>
        
        <Portfolio/>

        <footer>
          <p>links to all the goodies</p>
          <p>although it just ocurred to me that I might put all the social media icons
              in bubbles that are coming up from a treasure chest or fat fish or something
          </p>
        </footer>

      </div>
    );
  }
}

export default App;
