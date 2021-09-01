import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [val, setVal] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    console.log(time);
    if (time <= 0) {
      console.log("returning");
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  function handleKey(ev) {
    if (ev.key === "Enter") {
      if (Number.isInteger(Math.round(val))) {
        setTime(Math.round(val));
      } else {
        setTime(0);
      }
      setVal("");
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
            onKeyDown={(ev) => handleKey(ev)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
