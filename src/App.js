import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Login from './Login';
import Home from './Home';

function App() {

  const [{ user }, dispatch] = useStateValue();


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