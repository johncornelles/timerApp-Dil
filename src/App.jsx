import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [currentInterval, setcurrentInterval] = useState(null);
  const [isStopped, setIsStopped] = useState(false);
  let intervalId;
  const increaseTime = () => {
    setTimer((timer) => timer + 1);
  };

  useEffect(() => {
    Cookies.set("timer", timer);
  }, [timer]);
  const clearTimer = () => {
    clearInterval(currentInterval);
  };

  const startTimer = () => {
    console.log("working");
    intervalId = setInterval(() => {
      increaseTime();
    }, 1000);
    setcurrentInterval(intervalId);
  };
  const stopTimer = () => {
    setIsStopped((prev) => !prev);
    Cookies.remove("timer")
  };
  return (
    <>
      {!isStopped ? (
        <div>
          <h1>
            Count :
            <span style={{ color: timer % 2 != 0 ? "green" : "red" }}>
              {timer}
            </span>
          </h1>
          <button onClick={startTimer}>Play</button>
          <button onClick={clearTimer}>Pause</button>
          <button onClick={stopTimer}>Stop</button>
        </div>
      ) : (
        <h1>
          The timer has stopped with final count {" "}
          <span style={{ color: timer % 2 != 0 ? "green" : "red" }}>
            {timer}
          </span>
        </h1>
      )}
    </>
  );
};

export default App;
