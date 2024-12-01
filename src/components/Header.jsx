import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Murugan Stores</Link>
      <Link to="/login" className="login-btn">Login</Link>
    </header>
  );
};

export default Header;
