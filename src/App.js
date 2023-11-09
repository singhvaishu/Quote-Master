
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          {/* <div className="home-button">
            Home
          </div> */}
          <a href="/" className="home-button">Home</a>

          {/* <div className="bookmarks-button">
            Bookmarks
          </div> */}
          <Link to="/bookmarks" className="bookmarks-button" >
            Bookmarks
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
