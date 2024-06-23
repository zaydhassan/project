import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Reservation from './components/Reservation';
import Cancellation from './components/Cancellation';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reservation">Make a Reservation</Link></li>
            <li><Link to="/cancellation">Cancel a Reservation</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cancellation" element={<Cancellation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
