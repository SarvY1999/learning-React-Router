import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, Link, BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import User from './user';
import Visit from './visit';
import NotFound from './notfound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/visit">Visit</Link></li> 
      </ul>
    </div>
      <Routes>
        <Route exact path='/' element= {<App/>} />
        <Route path='/user' element= {<User/>} />
        <Route path='/visit' element= {<Visit/>} />
        <Route path = '*'element= {<NotFound />} />
      </Routes>
  </Router>
  
);