import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/HomePage/homePage.js';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homepage" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
