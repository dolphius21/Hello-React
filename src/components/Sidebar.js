import { NavLink } from 'react-router-dom';
import { FaBirthdayCake, FaReact } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <FaReact className="logo" />
        <h1 className="logo-text">Hello React</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/" activeClassName="active">
              <FaBirthdayCake className="nav-icon" />
              <p>Birthday Reminder</p>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/birthdays" activeClassName="active">
              <FaBirthdayCake className="nav-icon" />
              <p>Birthday Reminder</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
