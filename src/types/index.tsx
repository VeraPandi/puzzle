//**********************************//
//             #Images
//**********************************//
export interface ImageType {
   id: string | undefined;
   alt_description: string;
   height: number;
   width: number;

   links: {
      html: string;
   };

   urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
   };

   user: {
      links: {
         html: string;
      };
      name: string;
      portfolio_url: string;
      username: string;
   };
}

export interface ImageCategoriesType {
   [key: string]: ImageType[];
   animal: ImageType[];
   landscape: ImageType[];
   painting: ImageType[];
   digitalArt: ImageType[];
   graffiti: ImageType[];
   nature: ImageType[];
}

//**********************************//
//             #Puzzle
//**********************************//
export interface PuzzlePieceType {
   pieceID: number;
   positions: { x: number; y: number };
}

export interface PuzzleType {
   id: string;
   completed: boolean;
   pieces: PuzzlePieceType[];
}

export interface CompletedPuzzleType {
   id: string;
}

export interface CompletedPuzzlesType {
   [key: string]: CompletedPuzzleType[];
}

export interface UserGamesType {
   games: {
      completedPuzzles?: CompletedPuzzlesType;
   };
}

//**********************************//
//             #Stores
//**********************************//
export interface GameStoreType {
   currentImageData: ImageType | undefined;
   levelNumber: number | undefined;
   puzzleIsCompleted: boolean;
   successMessage: boolean;
   setCurrentImageData: (currentImageData: ImageType | undefined) => void;
   setLevelNumber: (levelNumber: number | undefined) => void;
   setPuzzleIsCompleted: (puzzleIsCompleted: boolean) => void;
   setSuccessMessage: (successMessage: boolean) => void;
}

export interface UserType {
   email: string;
   id: string;
   images: ImageCategoriesType;
   username: string;
   games: {};
}

export interface UserStoreType {
   userData: UserType | undefined;
   setUserData: (userData: UserType | undefined) => void;
}
