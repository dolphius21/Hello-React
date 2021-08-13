import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaReact, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaReact className="logo" />
        <h1 className="logo-text">Hello React</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/" activeClassName="active">
              <FaBirthdayCake className="nav-icon" />
              <p>Birthdays</p>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/birthdays" activeClassName="active">
              <FaMapMarkerAlt className="nav-icon" />
              <p>Tours</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
