
import './App.css';
import React from 'react';
//import { Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import MembersPage from './Pages/MembersPage';
import AboutPage from './Pages/AboutPage';
import Achievements from './Pages/Achievements';
import NewsPage from './Pages/NewsPage';
import Tournament from './Pages/Tournament';
import UserPage from './Pages/UserPage';
import DiscussionForum from './Pages/DiscussionForum';
import Signupc from './components/Authentication/Signupc';
import Loginc from './components/Authentication/Loginc';
import TournamentPage from './Pages/Tournament';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatPage from './Pages/Chatpage';
import HomePage from './Pages/HomePage';
import HomePagec from './Pages/HomePagec';

//import Login from 'frontend\src\components\Authentication\Login.js';
// import SignUp from './SignUp';
function App() {
  return (
     <Router>
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      {/* <Route path="/" component={HomePagec} exact/> */}
      <Route path="/chats" component={ChatPage}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/members" component={MembersPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/news" component={NewsPage} />
      <Route path="/tournament" component={TournamentPage} />
      <Route path="/userpage/:email" component={UserPage} />
      <Route path="/:email/forum" component = {DiscussionForum}/>
      <Route path="/Signupc" component={Signupc}/>
      <Route path="/loginc" component={Loginc}/>
      {/* <Route path="/userpage/:email/members" components={MembersPage}/> */}
    
      
    </div>
    </Router>
  );
}

export default App;
