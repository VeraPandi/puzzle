export interface PuzzleType {
   id: string;
}

export interface CompletedPuzzlesType {
   [key: string]: PuzzleType[];
}

export interface UserDataType {
   games: {
      completedPuzzles?: CompletedPuzzlesType;
   };
}
