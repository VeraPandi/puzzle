import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { ref, update } from "firebase/database";
import { database, auth } from "../config/firebaseConfig";
import { useUserStore } from "../stores/user";
import { usePageStore } from "../stores/page";
import { useGameStore } from "../stores/game";
import { puzzleData } from "./game/canvas/model";
import { levels, getCurrentLevel } from "./game/levels/functions";
import { BiArrowBack } from "react-icons/bi";
import {
   CompletedPuzzleType,
   UserGamesType,
   CompletedPuzzlesType,
} from "../types";

const Navigation = () => {
   const navigate = useNavigate();
   const { userData } = useUserStore();
   const { location } = usePageStore();
   const { levelNumber, puzzleIsCompleted, setPuzzleIsCompleted } =
      useGameStore();

   const goToPreviousPage = async () => {
      // Manages the display of the success message
      setPuzzleIsCompleted(false);

      const levelName = getCurrentLevel(levels, levelNumber);
      const userGames: UserGamesType = userData || { games: {} };
      let completedGames: CompletedPuzzlesType =
         userGames.games.completedPuzzles || {};

      // Manages the addition of completed puzzles to the database
      if (
         levelName &&
         location &&
         puzzleIsCompleted &&
         userData &&
         puzzleData
      ) {
         if (!completedGames[location]) completedGames[location] = [];

         const property = levelName as string;
         const completedPuzzle: any = { [property]: puzzleData.id };
         completedGames[location].push(completedPuzzle);

         const arrayWithoutDuplicates = completedGames[location].filter(
            (
               obj: CompletedPuzzleType,
               index: number,
               array: CompletedPuzzleType[]
            ) =>
               index ===
               array.findIndex(
                  (el) => JSON.stringify(el) === JSON.stringify(obj)
               )
         );

         completedGames[location] = arrayWithoutDuplicates;

         // Updates game data in the database
         const user = auth.currentUser as User;
         await update(ref(database, "users/" + user.uid + "/games/"), {
            allCompleted: false,
            completedPuzzles: completedGames,
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
