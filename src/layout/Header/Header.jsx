import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      <div className="navbar bg-slate-700 lg:p-4 grid grid-cols-5 lg:grid-cols-4 fixed z-50">
        <div className="flex bg-slate-700 col-span-2 lg:col-span-1">
          <Link to="/" className="btn btn-outline text-xl">
            daisyUI
          </Link>
        </div>

        <div className="flex justify-start col-span-2">
          <div className=" hidden lg:flex mx-auto">
            <Link to="/" className="btn btn-ghost text-xl">
              Home
            </Link>
            <Link to="/orders" className="btn btn-ghost text-xl">
              Orders
            </Link>
            <h1 className="btn btn-ghost text-xl">
              {user && <div>{user.email}</div>}
            </h1>
          </div>
        </div>

        <div className="flex-none gap-2 justify-end col-span-1">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user.photoURL
                      : `https://cdn-icons-png.freepik.com/256/11655/11655956.png?ga=GA1.1.540724036.1706111289&semt=ais`
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user ? (
                  <button onClick={handleLogout}>Log out</button>
                ) : (
                  <button>
                    <Link to="/login">Log in</Link>
                  </button>
                )}
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end inline lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <Link to="/" className="btn btn-success text-xl mb-2">
                Home
              </Link>
              {user && (
                <Link to="/orders" className="btn btn-success text-xl mb-2">
                  Orders
                </Link>
              )}
              {user ? (
                <button className="btn btn-info text-xl" onClick={handleLogout}>
                  Log out
                </button>
              ) : (
                <Link to="/login" className="btn btn-info text-xl">
                  Log in
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
