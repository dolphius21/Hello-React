<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import {
  FaReact,
  FaBirthdayCake,
  FaPlane,
  FaQuestionCircle
} from 'react-icons/fa';
import { MdComment, MdRestaurantMenu } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink exact to="/">
          <FaReact className="logo" />
        </NavLink>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink exact to="/birthdays" activeClassName="active">
              <FaBirthdayCake className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/tours" activeClassName="active">
              <FaPlane className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/reviews" activeClassName="active">
              <MdComment className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/questions" activeClassName="active">
              <FaQuestionCircle className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/menu" activeClassName="active">
              <MdRestaurantMenu className="nav-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
=======
import { NavLink } from 'react-router-dom';
import {
  FaReact,
  FaBirthdayCake,
  FaPlane,
  FaQuestionCircle,
  FaBriefcase
} from 'react-icons/fa';
import { MdComment, MdRestaurantMenu } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink exact to="/">
          <FaReact className="logo" />
        </NavLink>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink exact to="/birthdays" activeClassName="active">
              <FaBirthdayCake className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/tours" activeClassName="active">
              <FaPlane className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/reviews" activeClassName="active">
              <MdComment className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/questions" activeClassName="active">
              <FaQuestionCircle className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/menu" activeClassName="active">
              <MdRestaurantMenu className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/jobs" activeClassName="active">
              <FaBriefcase className="nav-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
>>>>>>> bc644a381e0e4db24f166703fac2ba4d4550dab9
