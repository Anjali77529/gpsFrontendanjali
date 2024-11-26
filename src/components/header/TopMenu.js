import React from "react";
import { Link } from "react-router-dom";

const TopMenu = ({ companyName, imageUrl }) => {
  const login = false;
  return (
    <>
      <section className="top-bar color-scheme">
        <div className="container">
          <div className="left-text nav-left pull-left">
            <p>
              <span>Opening Hours :</span> 24 / 7 , To Serve You.
            </p>
          </div>

          <ul className="nav-right pull-right list-unstyled">
            {login ? (
              <li className="dropdown nav-profile">
                <button
                  className="dropdown-toggle btn btn-bordered"
                  data-hover="dropdown"
                  data-toggle="dropdown"
                  data-animations="fadeInUp"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="img-circle resize"
                    alt=""
                    src="images/avatar.jpg"
                  />
                  <span className="hidden-xs small-padding">
                    <span>Umair</span> <i className="fa fa-caret-down"></i>
                  </span>
                </button>
                <ul className="dropdown-menu with-arrow pull-right">
                  <li>
                    <Link to="/profile">
                      <i className="fa fa-user"></i> <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/history">
                      <i className="fa fa-check"></i>{" "}
                      <span>Tracking History</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-settings">
                      <i className="fa fa-lock"></i>{" "}
                      <span>Payment Setting</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <i className="fa fa-sign-out"></i> <span>Log Out</span>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <i className="fa fa-lock"></i> Login{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up">
                    <i className="fa fa-user"></i> Sign Up{" "}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TopMenu;
