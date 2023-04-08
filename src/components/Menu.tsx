import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {
   const { logoutUser, removeUser } = useUserStore();
   const currentUser = useUserStore((state) => state.currentUser);
   const [isActive, setIsActive] = useState(false);

   const toggleMenu = () => {
      setIsActive(!isActive);
   };

   const handleLogoutUser = () => {
      if (currentUser !== null) {
         logoutUser(currentUser);
      }
   };

   const handleRemoveUser = () => {
      if (currentUser !== null) {
         logoutUser(currentUser);
         removeUser(currentUser);
      }
   };

   return (
      <section className="menu absolute top-0 right-0 w-auto m-5">
         <div
            className={
               !isActive
                  ? "menu-content flex flex-col w-80 m-2 p-2 rounded-md bg-transparent"
                  : "menu-content flex flex-col w-80 m-2 p-2 border-2 rounded-md bg-slate-800"
            }
         >
            <div className="menu-btns flex justify-end">
               <button
                  className="menu-btn flex justify-center items-center w-12 h-12 text-2xl font-bold text-white border-2 rounded-md"
                  onClick={toggleMenu}
               >
                  {!isActive ? <HiOutlineMenu /> : <RxCross2 />}
               </button>
            </div>

            {isActive && (
               <div className="settings flex flex-col m-5">
                  <Link
                     to="/"
                     className="logout-link my-5 px-8 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-center text-white text-2xl bg-slate-600"
                     onClick={handleLogoutUser}
                  >
                     Se déconnecter
                  </Link>
                  <Link
                     to="/"
                     className="unsubscribe-link my-5 px-8 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-center text-white text-2xl bg-slate-600"
                     onClick={handleRemoveUser}
                  >
                     Se désinscrire
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
};

export default Menu;
