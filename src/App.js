import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.js';
import DashBoard from './pages/DashBoard/dashBoard.js';
import StudySpaceFinder from './pages/StudySpaceFinderPage/studyFinder.js'
import ReviewPage from './pages/ReviewPage/reviewPage.js'
import ProfilePage from './pages/Profilepage/profilePage.js'
import './App.css';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp, faStar, faStarHalfAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
//import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(faThumbsUp, faThumbsDown, faStar, faStarHalfAlt, faTimes)


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/studyspacefinder" component={StudySpaceFinder}/>
        <Route exact path="/reviewpage" component={ReviewPage} />
        <Route exact path="/profile" component={ProfilePage}/>
      </Switch>
    </Router>
  );
}

export default App;
