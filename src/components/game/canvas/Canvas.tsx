import { useRef, useState, useEffect } from "react";
import { useModel, puzzleData } from "./model";
import { useGameStore } from "../../../stores/game";
import Loader from "../../Loader";
import SuccessMessage from "./SuccessMessage";

// Number of rows of the puzzle
export const rows = 2 as number;

const Canvas = () => {
   const refWrapper = useRef<HTMLDivElement>(null);
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);
   const { setPuzzleIsCompleted } = useGameStore();
   useModel(refWrapper, rows);

   const getPuzzleState = () => {
      if (puzzleData && puzzleData.completed) {
         setPuzzleIsCompleted(puzzleData.completed);
      }
   };

   // Launch a loader so that the image has time to load
   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoaderIsActive(false);
      }, 600);

      return () => clearTimeout(timeout);
   }, []);

   return loaderIsActive ? (
      <Loader />
   ) : (
      <section className="canvas">
         <div
            ref={refWrapper}
            className="canvas-wrapper animation-image m-10 rounded-light border-[3px] border-color-black bg-[#f3f3f4b2]"
         >
            <div onClick={getPuzzleState} id="canvas-sample-puzzle"></div>
            {puzzleData && puzzleData.completed && <SuccessMessage />}
         </div>
      </section>
   );
};

export default Canvas;
