import { datas } from "./functions";
import { useGameStore } from "../../../stores/game";
import { PuzzleType } from "../../../types";
const headbreaker = require("headbreaker");

export let puzzleData: PuzzleType | undefined;
export let puzzleObject: PuzzleType;

export const useModel = (
   refWrapper: React.RefObject<HTMLDivElement>,
   rows: number
) => {
   const { currentImageData, puzzleIsCompleted } = useGameStore();
   const imageUrl = currentImageData?.urls.regular as string;
   const imageID = currentImageData?.id as string;

   // Load the puzzle image
   const image = new Image();
   image.src = `${imageUrl}`;
   image.onload = () => {
      // Initial image size
      const srcImgWidth = image.width;
      const srcImgHeight = image.height;

      // Container sizes
      const wrapperElement = refWrapper.current as HTMLDivElement;
      const wrapperWidth = wrapperElement?.offsetWidth;

      // Container margins
      // (Sets a margin to add around the image to move the puzzle pieces)
      const marginX = wrapperWidth / 5;

      // Maximum image sizes
      const maxImgWidth = marginX * 3.5;
      const maxImgHeight = 800 as number;

      // Calculate image aspect ratio
      const ratio = Math.min(
         maxImgWidth / srcImgWidth,
         maxImgHeight / srcImgHeight
      );
      const calculateAspectRatioFit = {
         width: srcImgWidth * ratio,
         height: srcImgHeight * ratio,
      };

      // Gives the resized width and height of the image
      const imageResizing = calculateAspectRatioFit;

      // Defines the dimensions of each piece of the puzzle
      const pieceWidth = imageResizing.width / rows;
      const pieceHeight = imageResizing.height / rows;

      // Canvas settings
      const puzzle = new headbreaker.Canvas("canvas-sample-puzzle", {
         width: wrapperWidth,
         height: imageResizing.height + 600, // "+600" sets extra space below the image to make it easier to manipulate the pieces
         pieceSize: { x: pieceWidth, y: pieceHeight },
         proximity: 20,
         strokeWidth: 0.6,
         outline: new headbreaker.outline.Rounded(),
         preventOffstageDrag: true,
         fixed: true,
         image: image,
      });

      puzzle.adjustImagesToPuzzleWidth();
      puzzle.adjustImagesToPuzzleHeight();
      puzzle.autogenerate({
         horizontalPiecesCount: rows,
         verticalPiecesCount: rows,
      });

      // Current puzzle data
      puzzleData = datas(puzzle, rows, puzzleObject, imageID);

      // Shuffle the pieces when loading the puzzle and keep
      // the pieces in the same place when the puzzle is completed
      if (!puzzleIsCompleted) {
         puzzle.shuffle(0.6);
      }

      // Displays the canvas
      puzzle.draw();
   };
};
