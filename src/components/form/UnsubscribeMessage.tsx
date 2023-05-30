import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import { usePageStore } from "../../stores/page";
import { deleteUser, User } from "firebase/auth";
import { database, auth } from "../../config/firebaseConfig";
import { ref, remove } from "firebase/database";

const UnsubscribeMessage = () => {
   const { setUserData } = useUserStore();
   const { handleUnsubscribeMessage } = usePageStore();
   const currentUser = auth.currentUser as User;

   const handleRemoveUser = async () => {
      try {
         await remove(ref(database, "users/" + currentUser.uid)); // Deletes the user's profile from the database
         await deleteUser(currentUser); // Remove user authentication in Firebase
         setUserData(null); // Deletes the current user's data in the store
      } catch (error) {
         console.log("ERROR. User deletion did not work properly :", error);
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
