import React from "react";
import Canvas from "../components/game/canvas/Canvas";
import Attribution from "../components/game/canvas/Attribution";

const BoardGame = () => {
   return (
      <main className="main items-center">
         <Canvas />
         <Attribution />
      </main>
   );
};

export default BoardGame;
