import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Dashboard from './components/Dashboard';

import smartHomeData from './smartHomeData.js';

const App = () => {
    return (
      <div className="container">
        <Header title="Můj hrad"/>
        <Dashboard data={smartHomeData}/>
      </div>
  );
};

render(<App />, document.querySelector('#app'));
