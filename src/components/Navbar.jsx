import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar glass-card">
      <div className="nav-brand">
        <span className="brand-text">FlowTrack</span>
      </div>
      <div className="nav-links">
        <NavLink 
          to="/input" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Input Data
        </NavLink>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/insights" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          AI Insights
        </NavLink>
        <NavLink 
          to="/summary" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Manager Summary
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
