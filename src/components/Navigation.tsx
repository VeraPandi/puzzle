import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { User } from "firebase/auth";
import { ref, update } from "firebase/database";
import { database, auth } from "../config/firebaseConfig";
import { useUserStore } from "../stores/user";
import { usePageStore } from "../stores/page";
import { useGameStore } from "../stores/game";
import { puzzleData } from "./game/canvas/model";

const Navigation = () => {
   const navigate = useNavigate();
   const { userData } = useUserStore();
   const { location } = usePageStore();
   const { puzzleIsCompleted, setPuzzleIsCompleted } = useGameStore();

   const goToPreviousPage = async () => {
      // Manages the display of the success message
      setPuzzleIsCompleted(false);

      // Manages the addition of completed puzzles to the database
      if (location && puzzleIsCompleted && userData && puzzleData) {
         const gameData: any = userData.games;

         // Firebase doesn't support empty arrays. So we replaced this
         // value with "false" when we created the user. Then, we will
         // need to create an empty array to add completed puzzles to game data.
         if (gameData.completedPuzzles === false) {
            let array: any = [];
            array.push(puzzleData.id);
            gameData.completedPuzzles[location] = array;
         } else {
            // Here we also create an empty array, if necessary.
            if (gameData.completedPuzzles[location] === false) {
               gameData.completedPuzzles[location] = [];
               gameData.completedPuzzles[location].push(puzzleData.id);
            } else {
               gameData.completedPuzzles[location].push(puzzleData.id);
            }
         }

         gameData.completedPuzzles[location] = Array.from(
            new Set(gameData.completedPuzzles[location].map((el: string) => el))
         );

         // Updates game data in the database
         const user = auth.currentUser as User;
         await update(ref(database, "users/" + user.uid + "/games/"), {
            allCompleted: false,
            completedPuzzles: gameData.completedPuzzles,
         });
      }

      navigate(-1);
   };

   return (
      <nav className="navigation">
         <button
            className="back-btn black-btn flex justify-center items-center h-12 w-20 rounded-light"
            onClick={goToPreviousPage}
         >
            <BiArrowBack className="text-3xl text-color-white" />
         </button>
      </nav>
   );
};

export default Navigation;
