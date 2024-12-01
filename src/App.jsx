import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import LoginPage from './components/LoginPage'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:itemName" element={<ItemDetailsPage />} />
          <Route path="/login" element={<LoginPage />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;






