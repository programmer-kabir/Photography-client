import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdReviews, MdPlaylistPlay, MdMail } from "react-icons/md";
import {
  FaCalendarAlt,
  FaHome,
  FaWallet,
  FaShoppingCart,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { Footer } from "flowbite-react";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [isInstructor] = useInstructor();
  // const isUser = true;
  const [isAdmin] = useAdmin();
  return (
    <Fade>
      <div className="flex gap-4 mt-20">
        <div
          className={` ${
            open ? "w-40" : "w-72 "
          } flex flex-col p-3 bg-blue-500 shadow duration-300`}
        >
          <div className="space-y-1 ">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold ">Dashboard</h2>
              <button onClick={() => setOpen(!open)}>
                <HiOutlineMenuAlt3 className="w-6 h-6 "></HiOutlineMenuAlt3>
              </button>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm navlink">
                {isAdmin ? (
                  <>
                  <li className="rounded-sm ">
                  <NavLink
                    to="manageuser"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaUser className="w-6 h-6 "></FaUser>
                    <span className="uppercase font-semibold text-base">
                      Manage User
                    </span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="manageClass"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                    <span className="uppercase font-semibold text-base">
                    Manage Classes
                    </span>
                  </NavLink>
                </li>
                  </>
                ) : (
                  <>
                    <li className="rounded-sm ">
                      <NavLink
                        to="selectedClass"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaHome className="w-6 h-6 "></FaHome>
                        <span className="uppercase font-semibold text-base">
                          My Selected Classes
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="enrollClass"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                        <span className="uppercase font-semibold text-base">
                          My Enroll Classes
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}
                {
                  isInstructor ? <>
                  <li className="rounded-sm ">
                      <NavLink
                        to="addclass"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaHome className="w-6 h-6 "></FaHome>
                        <span className="uppercase font-semibold text-base">
                          Add Class
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="enrollClass"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                        <span className="uppercase font-semibold text-base">
                          My Enroll Classes
                        </span>
                      </NavLink>
                    </li>
                  </> :
                  <>
                  <li className="rounded-sm ">
                      <NavLink
                        to="selectedClass"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaHome className="w-6 h-6 "></FaHome>
                        <span className="uppercase font-semibold text-base">
                          My Selected Classes
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="enrollClass"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                        <span className="uppercase font-semibold text-base">
                          My Enroll Classes
                        </span>
                      </NavLink>
                    </li>
                  </>
                }
              </ul>
              <Footer.Divider />
              <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                  <li className="rounded-sm ">
                    <NavLink
                      className="flex items-center p-2 space-x-3 rounded-md"
                      to="/"
                    >
                      <FaHome className="w-6 h-6 "></FaHome>
                      <span className="uppercase  font-semibold text-base">
                        Home
                      </span>
                    </NavLink>
                  </li>

                  <li className="rounded-sm">
                    <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                      <HiOutlineMenu className="w-6 h-6 "></HiOutlineMenu>
                      <span className=" font-semibold text-base">menu</span>
                    </NavLink>
                  </li>
                  <li className="rounded-sm">
                    <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                      <FaShoppingBag className="w-6 h-6 "></FaShoppingBag>
                      <span className="uppercase  font-semibold text-base">
                        Shop
                      </span>
                    </NavLink>
                  </li>
                  <li className="rounded-sm">
                    <NavLink className="flex items-center p-2 space-x-3 rounded-md">
                      <MdMail className="w-6 h-6 "></MdMail>
                      <span className=" uppercase  font-semibold text-base">
                        Contact
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Outlet></Outlet>
      </div>
    </Fade>
  );
};

export default Dashboard;
