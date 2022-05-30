import React from 'react'
import {  BrowserRouter as Router,  Switch,  Route,Redirect} from "react-router-dom";
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import { useSelector } from 'react-redux';

import SingleMovie from './pages/SingleMovie';
import './App.css';


function App() {
  const isAuth = useSelector(state => state.Auth.isAuthenticated)
  return (
   <Router>
     
      {isAuth && <Navbar  /> } 
    
      <Switch>
        {!isAuth && (
          <Route path='/login'>
            <AuthForm />
          </Route> 
        )}
        <Route  path='/movie/:id'>
          
          <SingleMovie/>

      </Route>
      <Route path='/'>
      {isAuth && <Home/>}
      {!isAuth && <Redirect to='/login' />}
        </Route>
        </Switch>
     

   </Router>
  );
}

export default App;
