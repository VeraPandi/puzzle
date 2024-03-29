import { PuzzleType, PuzzlePieceType } from "../../../types";

// Create an object of pieces and a moving piece to
// detect the movement of each puzzle piece
export const datas = (
   puzzle: any,
   rows: number,
   puzzleObject: PuzzleType,
   imageID: string
) => {
   puzzleObject = {
      id: imageID,
      completed: false,
      pieces: [],
   };

   // Pieces object
   const figures = Object.values(puzzle.figures);
   figures.forEach((element: any, index: number) => {
      let piece: PuzzlePieceType = {
         pieceID: index + 1,
         positions: element.group.attrs as { x: number; y: number },
      };

      puzzleObject.pieces.push(piece);

      // Detects an action on a piece
      element.group.on("dragend", () => {
         handleNeighboringPieces(puzzleObject, rows);
      });
   });

   return puzzleObject;
};

export const handleNeighboringPieces = (
   puzzleObject: PuzzleType,
   rows: number
) => {
   // Checks if the X positions are the same in each column
   const XIdentical = puzzleObject.pieces.every(
      (objet: any, index: number) =>
         index < rows ||
         Math.round(objet.positions.x) ===
            Math.round(puzzleObject.pieces[index - rows].positions.x)
   );

   // Checks if the Y positions are the same in each row
   const YIdentical = puzzleObject.pieces.every(
      (objet: any, index: number) =>
         index % rows === 0 ||
         Math.round(objet.positions.y) ===
            Math.round(puzzleObject.pieces[index - 1].positions.y)
   );

   handlePuzzleValidation(XIdentical, YIdentical, puzzleObject);
};

export const handlePuzzleValidation = (
   XIdentical: boolean,
   YIdentical: boolean,
   puzzleObject: PuzzleType
) => {
   if (XIdentical && YIdentical) {
      puzzleObject.completed = true;
   } else {
      puzzleObject.completed = false;
   }
};
