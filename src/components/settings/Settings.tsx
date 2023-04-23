import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import { usePageStore } from "../../stores/page";
import UnsubscribeMessage from "./UnsubscribeMessage";

const Settings = () => {
   const { logoutUser } = useUserStore();
   const { unsubscribeMessage, handleUnsubscribeMessage } = usePageStore();
   const currentUser = useUserStore((state) => state.currentUser);

   const handleLogoutUser = () => {
      if (currentUser !== null) {
         logoutUser(currentUser);
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
                     onClick={handleLogoutUser}
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
