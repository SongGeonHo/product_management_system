import { Link, useRouteLoaderData, Form, NavLink } from "react-router-dom";
import "./MenuNavigation.css";

export default function MainNavigation() {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menu"
                          : "link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
              </div>

              <Link className="nav-link" to="/login">
                Login
              </Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </>
          </nav>
        </div>
      </div>
    </header>
  );
}
