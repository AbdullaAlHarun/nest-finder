import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-[#a90f33] shadow-lg fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/UpdateProfile"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Update Profile
            </NavLink>

            <NavLink
              to="/Register"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Register
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost gap-0 font-bold normal-case text-xl text-info"
        >
          Nest<span className="text-[#fff]">Finder</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#fff] font-bold btn btn-sm btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/UpdateProfile"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold btn-sm btn btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            Update Profile
          </NavLink>

          <NavLink
            to="/Register"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold btn-sm btn btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold btn-sm btn btn-neutral"
                : "font-bold btn btn-sm btn-ghost text-white"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
        to="/Login"
        >
          <a className="btn btn-success mr-4 text-white">Log In</a>
        </NavLink>
      </div>
    </div>
  );
};
export default Nav;
