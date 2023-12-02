import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGameStore } from "../../../stores/game";
import { useUserStore, UserStoreType } from "../../../stores/user";
import { levels, getCompletedGames, puzzleIsCompleted } from "./functions";
import { FaRegStar, FaStar } from "react-icons/fa";
import {
   CompletedPuzzlesType,
   PuzzleType,
   UserDataType,
} from "../../../types/index";

export interface StarsProps {
   img: PuzzleType;
}

const Stars = ({ img }: StarsProps) => {
   const { category } = useParams();
   const { setLevelNumber } = useGameStore();
   const { userData } = useUserStore() as UserStoreType;
   const userGames: UserDataType = userData || { games: {} };
   const completedGames: CompletedPuzzlesType =
      userGames.games.completedPuzzles || {};
   const arrayCompletedGames = getCompletedGames(category, completedGames);

   return (
      <div className="levels shelf-effect absolute bottom-0 inset-x-0 flex flex-col justify-between h-[93%] m-[7px] rounded-medium opacity-0 hover:top-0 hover:h-[96%] hover:m-[4px] hover:border-[3px] hover:border-color-white hover:opacity-100 hover:transition hover:linear hover:duration-300 hover:bg-color-black">
         <div className="levels-items flex flex-col items-center m-auto p-2.5">
            <span className="title pb-5 text-lg text-color-white">
               Choisis une difficulté
            </span>

            <div className="stars flex justify-end w-max mx-2.5">
               <Link
                  to="/board-game"
                  className="star"
                  onClick={() => setLevelNumber(levels.easy)}
               >
                  {puzzleIsCompleted("easy", img, arrayCompletedGames) &&
                  arrayCompletedGames ? (
                     <FaStar className="mx-1.5 text-4xl text-[#0f0]" />
                  ) : (
                     <FaRegStar className="mx-1.5 text-4xl text-[#0f0] active:scale-[0.8]" />
                  )}
               </Link>

               <Link
                  to="/board-game"
                  className="star"
                  onClick={() => setLevelNumber(levels.medium)}
               >
                  {puzzleIsCompleted("medium", img, arrayCompletedGames) &&
                  arrayCompletedGames ? (
                     <FaStar className="mx-1.5 text-4xl text-[#ffff40]" />
                  ) : (
                     <FaRegStar className="mx-1.5 text-4xl text-[#ffff40] active:scale-[0.8]" />
                  )}
               </Link>

               <Link
                  to="/board-game"
                  className="star"
                  onClick={() => setLevelNumber(levels.hard)}
               >
                  {puzzleIsCompleted("hard", img, arrayCompletedGames) &&
                  arrayCompletedGames ? (
                     <FaStar className="mx-1.5 text-4xl text-[#ff3f3f]" />
                  ) : (
                     <FaRegStar className="mx-1.5 text-4xl text-[#ff3f3f] active:scale-[0.8]" />
                  )}
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Stars;
