import { PuzzleType, CompletedPuzzlesType } from "../../../types";

export const levels: Record<string, number> = {
   easy: 5,
   medium: 8,
   hard: 10,
};

export const getCurrentLevel = (
   levels: Record<string, number>,
   levelNumber: number | undefined
) => {
   let levelName: string | undefined = undefined;
   for (const [key, value] of Object.entries(levels)) {
      if (value === levelNumber) {
         levelName = key;
         break;
      }
   }
   return levelName;
};

export const getCompletedGames = (
   category: any,
   completedGames: CompletedPuzzlesType
) => {
   const arrayCompletedGames: PuzzleType[] =
      (category &&
         completedGames[category] &&
         completedGames[category].map((el: PuzzleType) => el)) ||
      [];

   return arrayCompletedGames;
};

export const puzzleIsCompleted = (
   levelName: string,
   img: PuzzleType,
   arrayCompletedGames: PuzzleType[]
) => {
   const matches: PuzzleType | undefined = arrayCompletedGames.find(
      (item: any) => item[levelName] === img.id
   );
   return matches !== undefined;
};
