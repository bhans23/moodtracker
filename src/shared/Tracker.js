import React, { useState } from "react";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodValue, setMoodValue] = useState(0);
  const [moodList, setMoodList] = useState([]);
  // const [currentDate, setCurrentDate] = useState("Today's Date");
  // const [currentTime, setcurrentTime] = useState("Current Time");

  const handleSubmit = e => {
    e.prevenDefault();
    setMoodList({
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      mood: moodValue
    });
    console.log(moodList.date);
  };

  const handleChange = e => {
    // const dayTime = new Date();

    setMoodValue(e.target.value);
    // setCurrentDate(dayTime.toLocaleDateString());
    // setcurrentTime(dayTime.toLocaleTimeString());
  };

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <h3>{moodValue}</h3>

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
