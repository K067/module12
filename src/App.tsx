import React from 'react';
import './App.css';
import { FetchData } from './Components/Data/FetchData';

function App() {
  FetchData();
  return (
    <div className="container">
      <div className="wrapper">
        <h3>User List</h3>
        <div className="group">
          <input type="text" placeholder="id" />
          <img src="./img/icon/bxs_up-arrow.svg" alt="arrow" />
        </div>
        <ul>
        </ul>
      </div>
    </div>
  );
}

export default App;
