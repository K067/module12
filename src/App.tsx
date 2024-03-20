import './App.css';
import { FetchData } from './Components/Data/FetchData';
import arrow from './img/icon/arrow.svg';

function App() {
  FetchData();
  return (
    <div className="container">
      <div className="wrapper">
        <h3>User List</h3>
        <div className="group">
          <input type="text" placeholder="id" />
          <img src={arrow} alt="arrow" />
        </div>
        <ul>
        </ul>
      </div>
    </div>
  );
}

export default App;
