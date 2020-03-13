import React, { useState } from "react";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodValue, setMoodValue] = useState(0);
  const [currentDate, setCurrentDate] = useState("Today's Date");
  const [currentTime, setcurrentTime] = useState("Current Time");

  const handleSubmit = () => {};

  const handleChange = e => {
    setMoodValue(e.target.value);
    const dayTime = new Date();
    setCurrentDate(dayTime.toLocaleDateString());
    setcurrentTime(dayTime.toLocaleTimeString());
  };

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <h3>{moodValue}</h3>
        <span>
          {currentTime} {currentDate}
        </span>
        <form submit={handleSubmit}>
          <input
            type="range"
            min="1"
            max="10"
            value={moodValue}
            className="slider"
            onChange={handleChange}
            id="myRange"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;
