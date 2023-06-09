import React from "react";
import { NavLink } from "react-router-dom";

function GdoHeadLeftSideMenu() {
  return (
    <div className="left-side-menu pt-3" style={{ minHeight: "100vh" }}>
      <div>
        {/* side menu */}
        <ul className="nav  flex-column">
          {/* adding team */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link side-menu" : "inactive nav-link"
              }
              to="add-team"
            >
              Add Team <i className="bi bi-person-add"></i>
            </NavLink>
          </li>
          {/* Portfolio Dashboard */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link side-menu" : "inactive nav-link"
              }
              to="portfolio-dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          {/* resource request*/}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link side-menu" : "inactive nav-link"
              }
              to="resource-requests"
            >
              Resource Requests
            </NavLink>
          </li>
          {/* project concerns */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link side-menu" : "inactive nav-link"
              }
              to="project-concerns"
            >
              Project Concerns
            </NavLink>
          </li>
          {/*  Raise Resource Requests */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "inactive nav-link"
              }
              to="raise-resource-request"
            >
              Raise Resource Requests
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GdoHeadLeftSideMenu;
