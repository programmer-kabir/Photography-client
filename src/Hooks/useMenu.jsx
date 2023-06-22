import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
  const {refetch, data: classes = [], isLoading:loading} = useQuery({
    queryKey: ["classes"],
    queryFn:async()=>{
      const res = await fetch('http://localhost:5000/class');
      return res.json(
      );
    }
  })
  return [classes,loading,refetch]
}

export default useMenu;
{/* {isUser ? (
                  <>
                    <li className="rounded-sm ">
                      <NavLink
                        to="adminHome"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaHome className="w-6 h-6 "></FaHome>
                        <span className="uppercase font-semibold text-base">
                          Admin Home
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="addItems"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                        <span className="uppercase font-semibold text-base">
                          add items
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="manageItems"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaWallet className="w-6 h-6 "></FaWallet>
                        <span className="uppercase  font-semibold text-base">
                          manage items
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="manageBoking"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaShoppingCart className="w-6 h-6 "></FaShoppingCart>
                        <span className=" uppercase  font-semibold text-base">
                          Manage bookings
                        </span>
                      </NavLink>
                    </li>

                    <li className="rounded-sm">
                      <NavLink
                        to="allUser"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaShoppingCart className="w-6 h-6 "></FaShoppingCart>
                        <span className=" uppercase  font-semibold text-base">
                          all users
                        </span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="rounded-sm ">
                      <NavLink
                        to="userhome"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaHome className="w-6 h-6 "></FaHome>
                        <span className="uppercase font-semibold text-base">
                          User Home
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="reservation"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaCalendarAlt className="w-6 h-6 "></FaCalendarAlt>
                        <span className="uppercase font-semibold text-base">
                          reservation
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="paymentHistory"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaWallet className="w-6 h-6 "></FaWallet>
                        <span className="uppercase  font-semibold text-base">
                          Payment History
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="mycart"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaShoppingCart className="w-6 h-6 "></FaShoppingCart>
                        <span className=" uppercase  font-semibold text-base">
                          my cart
                        </span>
                        <span className="inline-flex items-center justify-center w-4 h-4 ml-1 mb-2 text-xs font-semibold text-blue-800  bg-blue-200 rounded-full">
                          {cart.length || 0}
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="addReview"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <MdReviews className="w-6 h-6 "></MdReviews>
                        <span className=" uppercase  font-semibold text-base">
                          add review
                        </span>
                      </NavLink>
                    </li>
                    <li className="rounded-sm">
                      <NavLink
                        to="booking"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <MdPlaylistPlay className="w-6 h-6 "></MdPlaylistPlay>
                        <span className=" uppercase  font-semibold text-base">
                          my booking
                        </span>
                      </NavLink>
                    </li>
                  </>
                )} */}