import { User } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import Image from "../components/game/canvas/Image";
import Menu from "../components/menu/Menu";
import Navigation from "../components/Navigation";
import { auth, database } from "../config/firebaseConfig";
import { useUserStore } from "../stores/user";
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
    <div className="page grow bg-beige-texture grayscale-[30%]">
      <header className="header flex items-center w-full p-10">
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
