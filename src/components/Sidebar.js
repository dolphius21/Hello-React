import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaReact,
  FaBars,
  FaBirthdayCake,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className={`sidebar-container ${showSidebar && 'show-sidebar'}`}>
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
      </div>
      <div
        className={`toggle-btn ${showSidebar && 'active-sidebar'}`}
        onClick={handleToggleClick}
      >
        <FaBars />
      </div>
    </>
  );
};

export default Sidebar;
