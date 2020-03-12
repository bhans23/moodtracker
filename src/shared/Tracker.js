import React, { useState } from "react";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodValue, setMoodValue] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setcurrentTime] = useState("");

  const handleChange = (e) => {
    setMoodValue(e.target.value);
  };

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <h3>{moodValue}</h3>
        <form>
          <input
            type="range"
            min="1"
            max="10"
            value={moodValue}
            className="slider"
            onChange={handleChange}
            id="myRange"
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;
