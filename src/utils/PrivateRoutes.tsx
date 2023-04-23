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
      <div className="page bg-beige-texture grayscale-[30%] mobile:h-auto tablet:rounded-light tablet:m-10 tablet:border-[3px] tablet:border-color-black">
         <header className="header w-full flex items-center p-10">
            {path === "/user" && (
               <span className="welcome-name flex h-12 mt-2 text-xl">{`Bienvenue, ${currentUser} !`}</span>
            )}

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
