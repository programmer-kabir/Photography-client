import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Avatar, Dropdown } from "flowbite-react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then();
  };
  return (
    <div className="fixed w-full z-20 top-0 left-0 ">
      <nav className="w-full max-w-7xl mx-auto bg-blue-500  shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <HiOutlineMenuAlt3 className="w-6 h-6 text-white font-bold"></HiOutlineMenuAlt3>
                  ) : (
                    <HiMenuAlt2 className="w-6 h-6 text-white font-bold"></HiMenuAlt2>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 text-white text-lg justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link to="/" active={"true"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/instructor' >Instructors</Link>
                </li>
                <li>
                  <Link to='/classes'>Classes</Link>
                </li>
                <li className="lg:hidden md:inline-block">
                {user ? <><Link to='/dashboard'>Dashboard</Link></>:<></>}
                </li>
              </ul>
              <div className="mt-3 space-y-2 text-center  lg:hidden md:inline-block">
              {user ? (
              <>
                <Dropdown
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img={user.photoURL}
                      rounded
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>
                  
                  {/* <Dropdown.Item><button onClick={handleLogOut}>ba; out</button></Dropdown.Item> */}
                  <Dropdown.Item><button onClick={handleLogOut}>Sign out</button></Dropdown.Item>
                </Dropdown>
              </>
            ) : (
              <>
                <Link
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex gap-2 items-center space-x-2 md:inline-block">
            
            {user ? (
              <>
                <Dropdown
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img={user.photoURL}
                      rounded 
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item><Link to='/dashboard'>Dashboard </Link></Dropdown.Item>
                  <Dropdown.Item><button onClick={handleLogOut}>Sign out</button></Dropdown.Item>
                </Dropdown>
              </>
            ) : (
              <>
                <Link
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
