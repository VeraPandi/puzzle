import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import { usePageStore } from "../../stores/page";
import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import UnsubscribeMessage from "./UnsubscribeMessage";

const Settings = () => {
   const navigate = useNavigate();
   const { setUserData } = useUserStore();
   const { unsubscribeMessage, handleUnsubscribeMessage } = usePageStore();

   const handleSignOut = async () => {
      try {
         await signOut(auth); // Log out the user
         setUserData(null); // Deletes the current user's data in the store
         navigate("/");
      } catch (error) {
         console.error("ERROR. User logout did not work properly :", error);
      }
   };

   return (
      <section className="settings my-12 mx-8">
         {!unsubscribeMessage ? (
            <>
               <div className="setting flex flex-col">
                  <Link
                     to="/"
                     className="logout-link black-btn my-7 px-8 py-4 rounded-medium text-center text-xl text-color-white tracking-wide"
                     onClick={handleSignOut}
                  >
                     Se déconnecter
                  </Link>
               </div>

               <div className="setting flex flex-col">
                  <button
                     className="unsubscribe-link black-btn my-7 px-8 py-4 rounded-medium text-center text-xl text-color-white tracking-wide"
                     onClick={() => handleUnsubscribeMessage(true)}
                  >
                     Se désinscrire
                  </button>
               </div>
            </>
         ) : (
            <UnsubscribeMessage />
         )}
      </section>
   );
};

export default Settings;
