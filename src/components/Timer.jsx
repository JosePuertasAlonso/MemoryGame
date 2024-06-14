import React, { useState, useEffect } from "react";

const Timer = ({ isActive, initialSeconds, onTimeUp, againstClock }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (againstClock) {
            if (prevSeconds <= 0) {
              clearInterval(interval);
              onTimeUp();
              return 0;
            }
            return prevSeconds - 1;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, againstClock, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <h3 style={{ fontFamily: "cursive", fontWeight: "bold" }}>
        {formatTime(seconds)}
      </h3>
    </div>
  );
};

export default Timer;
