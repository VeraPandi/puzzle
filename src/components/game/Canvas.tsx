import { useRef, useState, useEffect } from "react";
import { ImageType } from "../../services/api";
import { useGameStore } from "../../stores/game";
import Loader from "../Loader";
const headbreaker = require("headbreaker");

const Canvas = () => {
   const currentImageData = useGameStore(
      (state) => state.currentImageData
   ) as ImageType;
   const imageUrl = currentImageData?.urls.regular as string;
   const refWrapper = useRef<HTMLDivElement>(null);
   const [loaderIsActive, setLoaderIsActive] = useState<boolean>(true);

   // Launch a loader so that the image has time to load
   useEffect(() => {
      setTimeout(() => {
         setLoaderIsActive(false);
      }, 600);
   }, []);

   // Load the puzzle image
   const image = new Image();
   image.src = `${imageUrl}`;
   image.onload = () => {
      // Initial image size
      const srcImgWidth = image.width;
      const srcImgHeight = image.height;

      // Container sizes
      const wrapperElement = refWrapper.current as HTMLDivElement;
      const wrapperWidth = wrapperElement?.offsetWidth as number;

      // Container margins
      // (Sets a margin to add around the image to move the puzzle shapes)
      const marginX = wrapperWidth / 5;

      // Maximum image sizes
      const maxImgWidth = marginX * 3.5;
      const maxImgHeight = 800 as number;

      // Calculate image aspect ratio
      const calculateAspectRatioFit = (
         srcImgWidth: number,
         srcImgHeight: number,
         maxImgWidth: number,
         maxImgHeight: number
      ) => {
         const ratio = Math.min(
            maxImgWidth / srcImgWidth,
            maxImgHeight / srcImgHeight
         );
         return { width: srcImgWidth * ratio, height: srcImgHeight * ratio };
      };

      // Gives the resized width and height of the image
      const imageResizing = calculateAspectRatioFit(
         srcImgWidth,
         srcImgHeight,
         maxImgWidth,
         maxImgHeight
      );

      // Number of rows of the puzzle
      const rows = 4 as number;

      // Defines the dimensions of each piece of the puzzle
      const shapeWidth = imageResizing.width / rows;
      const shapeHeight = imageResizing.height / rows;

      // Canvas settings
      const autogen = new headbreaker.Canvas("canvas-sample-autogen", {
         width: wrapperWidth,
         height: imageResizing.height + 600, // "+600" sets extra space below the image to make it easier to manipulate the shapes
         pieceSize: { x: shapeWidth, y: shapeHeight },
         proximity: 20,
         strokeWidth: 0.6,
         outline: new headbreaker.outline.Rounded(),
         preventOffstageDrag: true,
         fixed: true,
         image: image,
      });

      autogen.adjustImagesToPuzzleWidth();
      autogen.adjustImagesToPuzzleHeight();
      autogen.autogenerate({
         horizontalPiecesCount: rows,
         verticalPiecesCount: rows,
      });

      // Mix the shapes of the puzzle
      autogen.shuffle(0.6);

      // Displays the canvas
      autogen.draw();
   };

   return loaderIsActive ? (
      <Loader />
   ) : (
      <section className="canvas">
         <div
            ref={refWrapper}
            className="canvas-wrapper animation-image m-10 rounded-light border-[3px] border-color-black bg-[#f3f3f4b2]"
         >
            <div id="canvas-sample-autogen"></div>
         </div>
      </section>
   );
};

export default Canvas;
