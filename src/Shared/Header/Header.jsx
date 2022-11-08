import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../asset/logo/awesomely-eating-logo.png";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("successfully logout", { autoClose: 800 });
      })

      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-orange-100">
      <div className="navbar max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} width="200" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="right_menu navbar-end">
          {user?.uid ? (
            <>
              <Link to="/myReviews">My Reviews</Link>
              <Link to="/addService">Add Service</Link>
              <Link onClick={handleLogout}>Log out</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
