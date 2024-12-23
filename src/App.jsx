import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import SignInModal from './components/SignInModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar onSignInClick={() => setShowSignIn(true)} />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
        <SignInModal show={showSignIn} onHide={() => setShowSignIn(false)} />
      </div>
    </Router>
  );
};

export default App;