import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.js';
import LoginPage from './pages/LoginPage/loginPage.js'
import DashBoard from './pages/DashBoard/dashBoard.js';
import StudySpaceFinder from './pages/StudySpaceFinderPage/studySpaceFinder.js'
import ReviewPage from './pages/ReviewPage/reviewPage.js'
import ProfilePage from './pages/Profilepage/profilePage.js'
import './App.css';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp, faStar, faStarHalfAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp, faThumbsDown, faStar, faStarHalfAlt, faTimes)


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/studyspacefinder" component={StudySpaceFinder} />
        <Route exact path="/studybuddyfinder" component={StudyBuddyFinder} />
        <Route exact path="/reviewpage" component={ReviewPage} />
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default App;
