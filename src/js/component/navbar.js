import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar bg-body-tertiary"
      style={{ borderBottom: "1px solid lightgray" }}
    >
      <div className="container-fluid ">
      <Link to={`/`}>
        <a className="navbar-brand ">
          
            <img
              className="mx-5"
              style={{ height: "50px", width: "90px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
            />
          
        </a>
        </Link>
        <form className="d-flex" role="search">
          <div className="dropdown mx-2">
            <a
              className="btn btn-warning dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites <span className="badge text-bg-secondary">4</span>
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
