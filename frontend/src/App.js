
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

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';

//import Login from 'frontend\src\components\Authentication\Login.js';
// import SignUp from './SignUp';
function App() {
  return (
     <Router>
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chat" component={ChatPage}/>
      {/* <Route path="/login" component={Login} exact /> */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/members" component={MembersPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/news" component={NewsPage} />
      <Route path="/tournament" component={Tournament} />
      <Route path="/userpage/:email" component={UserPage} />

      
    </div>
    </Router>
  );
}

export default App;
