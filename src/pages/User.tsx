import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/user";
import Gallery from "../components/Gallery";

const User = () => {
   const { logoutUser, removeUser } = useUserStore();
   const currentUser = useUserStore((state) => state.currentUser);

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
      <div>
         <main className="main flex flex-col items-center justify-center h-screen m-20 text-slate-50 bg-stone-400">
            <h1>{`Bienvenue, ${currentUser} !`}</h1>

            <Gallery />

            <Link
               to="/"
               className="logout-btn my-10 px-8 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-white text-2xl font-bold bg-slate-600"
               onClick={handleLogoutUser}
            >
               Se déconnecter
            </Link>

            <Link
               to="/"
               className="removeUser-btn my-10 px-8 pt-4 pb-6 border-solid border-2 border-green-200 rounded-md text-white text-2xl font-bold bg-slate-600"
               onClick={handleRemoveUser}
            >
               Se désinscrire
            </Link>
         </main>
      </div>
   );
};

export default User;
