
import './App.css';
import React from 'react';
//import { Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
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
    </div>
    </Router>
  );
}

export default App;
