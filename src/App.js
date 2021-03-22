import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.js';
import DashBoard from './pages/DashBoard/dashBoard.js';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default App;
