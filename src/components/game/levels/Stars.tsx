import React from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../stores/user";
import { puzzleIsCompleted, getCompletedGames } from "./functions";
import { FaRegStar, FaStar } from "react-icons/fa";
import {
   UserStoreType,
   UserGamesType,
   CompletedPuzzlesType,
   CompletedPuzzleType,
} from "../../../types";

export interface StarsProps {
   img: CompletedPuzzleType;
}

const Stars = ({ img }: StarsProps) => {
   const { category } = useParams();
   const { userData } = useUserStore() as UserStoreType;
   const userGames: UserGamesType = userData || { games: {} };
   const completedGames: CompletedPuzzlesType =
      userGames.games.completedPuzzles || {};
   const arrayCompletedGames = getCompletedGames(category, completedGames);

   return (
      <div className="Stars flex justify-center">
         {puzzleIsCompleted("easy", img, arrayCompletedGames) &&
         arrayCompletedGames ? (
            <FaStar className="mx-1.5 text-2xl text-[#0f0]" />
         ) : (
            <FaRegStar className="mx-1.5 text-2xl text-[#0f0]" />
         )}
         {puzzleIsCompleted("medium", img, arrayCompletedGames) &&
         arrayCompletedGames ? (
            <FaStar className="mx-1.5 text-2xl text-[#ffff40]" />
         ) : (
            <FaRegStar className="mx-1.5 text-2xl text-[#ffff40]" />
         )}
         {puzzleIsCompleted("hard", img, arrayCompletedGames) &&
         arrayCompletedGames ? (
            <FaStar className="mx-1.5 text-2xl text-[#ff3f3f]" />
         ) : (
            <FaRegStar className="mx-1.5 text-2xl text-[#ff3f3f]" />
         )}
      </div>
   );
};

export default Stars;
