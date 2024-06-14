import Board from "./components/Board";
import { useState } from "react";
import DifficultyModal from "./components/DifficultyModal";
import WinnerModal from "./components/WinnerModal";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isWinnerModalOpen, setIsWinnerModalOpen] = useState(false);
  const [againstClock, setAgainstClock] = useState(false);
  const [level, setLevel] = useState(1);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [matched, setMatched] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const handleSelectDifficulty = (selectedDifficulty) => {
    if (selectedDifficulty === "clock") {
      setDifficulty(10 * level);
      if (level === 1) {
        setInitialSeconds(180);
        setAgainstClock(true);
        setMatched(0);
      }
    } else {
      setAgainstClock(false);
      setInitialSeconds(0);
      setDifficulty(selectedDifficulty);
    }
    setIsModalOpen(false);
  };

  const handleGameEnd = () => {
    if (againstClock) {
      setLevel(level + 1);
      handleSelectDifficulty("clock");
      console.log(level);
    } else {
      handleTimeUp();
    }
  };

  const resetGame = () => {
    setIsModalOpen(true);
    setIsWinnerModalOpen(false);
  };

  const handleTimeUp = () => {
    setIsWinnerModalOpen(true);
    setDifficulty(null);
  };

  console.log(againstClock);
  return (
    <div className="main">
      <h1
        style={{
          margin: "0 auto",
          marginTop: "60px",
          fontFamily: "cursive",
          fontWeight: "bold",
        }}
      >
        {" "}
        Memory Game
      </h1>
      <DifficultyModal
        isOpen={isModalOpen}
        onSelectDifficulty={handleSelectDifficulty}
      />
      {difficulty && (
        <>
          <Timer
            isActive={gameStarted ? true : false}
            initialSeconds={initialSeconds}
            onTimeUp={handleTimeUp}
            againstClock={againstClock}
          />
          <Board
            nCard={difficulty}
            onGameEnd={handleGameEnd}
            matched={matched}
            setMatched={setMatched}
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
          />
        </>
      )}
      <WinnerModal
        isOpen={isWinnerModalOpen}
        reset={resetGame}
        againstClock={againstClock}
        matchedCards={matched}
      />
    </div>
  );
}

export default App;
