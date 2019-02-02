import React from 'react';
import { Link } from 'react-router-dom';

const AppNav = ({ isAuthenticated }) => (
  <nav>
    <Link to="/">Home</Link>
    {isAuthenticated && (
      <>
        <Link to="/profile">Profile</Link>
      </>
    )}
  </nav>
);

export default AppNav;
