import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = e => {
    const { mood, date, time } = e;
    setMoodList(moodList => [
      ...moodList,
      {
        mood: mood,
        date: date,
        time: time
      }
    ]);
  };

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <MoodForm handleSubmit={handleSubmit} />

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
