import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import RecommandedVideos from './RecommandedVideos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          {/* Route for Search Page */}
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          
          {/* Route for Home Page */}
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommandedVideos />
                
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
