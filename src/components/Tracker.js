import React, { useState } from "react";
import MoodItem from "./MoodItem";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodValue, setMoodValue] = useState(0);
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setMoodList(moodList => [
      ...moodList,
      {
        mood: moodValue,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }
    ]);
  };

  const handleChange = e => {
    setMoodValue(e.target.value);
  };

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <h3>{moodValue}</h3>

        <form onSubmit={handleSubmit}>
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
        <div className="moodLists">
          {moodList.map(moodObject => (
            <MoodItem moodObject={moodObject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;
