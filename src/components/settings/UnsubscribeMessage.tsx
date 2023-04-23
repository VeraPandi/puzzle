import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import { usePageStore } from "../../stores/page";

const UnsubscribeMessage = () => {
   const { logoutUser, removeUser } = useUserStore();
   const { handleUnsubscribeMessage } = usePageStore();
   const currentUser = useUserStore((state) => state.currentUser);

   const handleRemoveUser = () => {
      if (currentUser !== null) {
         logoutUser(currentUser);
         removeUser(currentUser);
      }
   };

   return (
      <div className="unsubscribeMessage">
         <div className="unsubscribeMessage-content">
            <h3>Désinscription de Jigsaw Puzzle</h3>
            <p className="text-center">
               Nous te rappelons que la désinscription entraînera la suppression
               définitive de ton compte et de toutes tes parties sauvegardées.
            </p>
         </div>

         <div className="unsubscribeMessage-content text-center mt-[52px] mb-5">
            <h3>Souhaites-tu vraiment te désinscrire ?</h3>
            <div className="unsubscribeMessage-btns flex justify-between max-h-[92px] py-3">
               <Link
                  to="/"
                  className="unsubscribeMessage-btn red-btn mr-2 px-8 py-4 rounded-medium text-center text-xl text-color-white tracking-wide"
                  onClick={handleRemoveUser}
               >
                  Oui, je me désinscris
               </Link>

               <button
                  className="unsubscribeMessage-btn black-btn ml-2 px-8 py-4 rounded-medium text-center text-xl text-color-white tracking-wide"
                  onClick={() => handleUnsubscribeMessage(false)}
               >
                  Non
               </button>
            </div>
         </div>
      </div>
   );
};

export default UnsubscribeMessage;
