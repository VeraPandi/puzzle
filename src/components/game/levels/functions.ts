import { CompletedPuzzleType, CompletedPuzzlesType } from "../../../types";

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
   const arrayCompletedGames: CompletedPuzzleType[] =
      (category &&
         completedGames[category] &&
         completedGames[category].map((el: CompletedPuzzleType) => el)) ||
      [];

   return arrayCompletedGames;
};

export const puzzleIsCompleted = (
   levelName: string,
   img: CompletedPuzzleType,
   arrayCompletedGames: CompletedPuzzleType[]
) => {
   const matches: CompletedPuzzleType | undefined = arrayCompletedGames.find(
      (item: any) => item[levelName] === img.id
   );
   return matches !== undefined;
};
