import Attribution from "../components/game/canvas/Attribution";
import Canvas from "../components/game/canvas/Canvas";

const BoardGame = () => {
  return (
    <main className="main items-center h-full">
      <Canvas />
      <Attribution />
    </main>
  );
};

export default BoardGame;
