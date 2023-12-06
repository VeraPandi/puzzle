import { useEffect } from "react";
import { Outlet, Navigate, useLocation, useParams } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { database, auth } from "../config/firebaseConfig";
import { User } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import Menu from "../components/menu/Menu";
import Navigation from "../components/Navigation";
import Image from "../components/game/canvas/Image";
import { UserType } from "../types";

const PrivateRoutes = () => {
   const path = useLocation().pathname as string;
   const params = useParams().category as string;
   const { setUserData } = useUserStore();
   const currentUser = auth.currentUser as User;

   // Add current user data to store
   const getUserDatas = () => {
      const dbRef = ref(database, "users/" + currentUser.uid);
      onValue(dbRef, (snapshot) => {
         const data: UserType = snapshot.val();
         setUserData(data);
      });
   };

   useEffect(() => {
      getUserDatas();
   }, []);

   return currentUser !== null ? (
      <div className="page bg-beige-texture grayscale-[30%] mobile:h-auto tablet:rounded-light tablet:m-10 tablet:border-[3px] tablet:border-color-black">
         <header className="header w-full flex items-center p-10">
            {path === "/user" && (
               <span className="welcome-name flex h-12 mt-2 text-xl">{`Bienvenue, ${currentUser.displayName} !`}</span>
            )}
            {path === `/images/${params}` || path === "/board-game" ? (
               <Navigation />
            ) : null}
            {path === `/board-game` && <Image />}
            <Menu />
         </header>
         <Outlet />
      </div>
   ) : (
      <Navigate to="/" />
   );
};

export default PrivateRoutes;
