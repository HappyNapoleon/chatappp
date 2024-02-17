import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Login from './Login';
import Home from './Home';

function App() {

  const [{ user }, dispatch] = useStateValue();

    
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch({ type: 'SET_USER', user: storedUser });
    }
  }, []);

  // Save user login status to local storage whenever user state changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);



  return (
    <div>

      {!user ? (
        <Login />
      ) : (

        <div>
          <Router>
            <Routes>
              <Route path="/"  element={<Home />}/>   
            </Routes>         
          </Router>
        </div>

      )}

    </div>
  )
}

export default App