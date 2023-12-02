import { useRef, useState, useEffect } from "react";
import { useGameStore } from "../../../stores/game";
import { useModel, puzzleData } from "./model";
import { levels, getCurrentLevel } from "../levels/functions";
import SuccessMessage from "./SuccessMessage";
import Loader from "../../Loader";

const Canvas = () => {
   const refWrapper = useRef<HTMLDivElement>(null);
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);
   const { levelNumber, setPuzzleIsCompleted } = useGameStore();
   const rows = levelNumber as number;
   const levelName = getCurrentLevel(levels, levelNumber) as string;
   useModel(refWrapper, rows);

   const getPuzzleState = () => {
      if (puzzleData && puzzleData.completed && levelName) {
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
