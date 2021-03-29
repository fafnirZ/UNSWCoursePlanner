import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.js';
import DashBoard from './pages/DashBoard/dashBoard.js';
import StudySpaceFinder from './pages/StudySpaceFinderPage/studyFinder.js'
import StudyBuddyFinder from './pages/StudyBuddyFinderPage/studyBuddyFinder.js'
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/studyspacefinder" component={StudySpaceFinder} />
        <Route exact path="/studybuddyfinder" component={StudyBuddyFinder} />
      </Switch>
    </Router>
  );
}

export default App;
