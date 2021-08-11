import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useEffect} from 'react';


import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

import { auth } from './components/firebase'
import { useStateValue } from './components/StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //this run once when the app comppmemt loads

    auth.onAuthStateChanged(authUser =>{
      console.log('The user log in', authUser);

      if (authUser){
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])



  return (
    <div className="App">
      <Router>

        <Switch>

          
          <Route path="/checkout"> <Header /> <Checkout /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/">  <Header /> <Home />    </Route>
          

        </Switch>

      </Router>
    </div>
  );
}

export default App;
