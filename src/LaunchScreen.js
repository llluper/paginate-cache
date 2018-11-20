import React from 'react';
import logo from './logo.svg';

const LaunchScreen = () => {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the Paginate-Cache project<br></br> <code>by Mitchell Stanford</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with React &amp; Redux
          </a>
        </header>
    );
}

export default LaunchScreen;
