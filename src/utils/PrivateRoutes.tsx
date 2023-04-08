import React from "react";
import { Outlet, Navigate, useLocation, useParams } from "react-router-dom";
import { useUserStore } from "../stores/user";
import Menu from "../components/Menu";
import Navigation from "../components/Navigation";

const PrivateRoutes = () => {
   const currentUser = useUserStore((state) => state.currentUser);
   const path = useLocation().pathname as string;
   const params = useParams().category as string;

   return currentUser !== null ? (
      <div className="page relative bg-stone-400">
         <header className="relative w-full h-36 flex items-center p-10">
            {path === `/images/${params}` || path === "/board-game" ? (
               <Navigation />
            ) : null}

            <Menu />
         </header>
         <Outlet />
      </div>
   ) : (
      <Navigate to="/" />
   );
};

export default PrivateRoutes;
