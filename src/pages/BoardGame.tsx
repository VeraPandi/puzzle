import React from "react";
import Canvas from "../components/game/Canvas";
import Attribution from "../components/game/Attribution";

const BoardGame = () => {
   return (
      <main className="main items-center">
         <Canvas />
         <Attribution />
      </main>
   );
};

export default BoardGame;
