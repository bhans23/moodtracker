import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";


const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = moodItem => {
    setMoodList(moodList => {
      const moodObject = moodList.find(
        moodObject => moodObject.date === new Date().toLocaleDateString()
      );
      if (moodObject) {
        moodObject.moods = [moodItem, ...moodObject.moods]
        // moodObject.moods.push(moodItem);
        // moodObject.moods.unshift(moodItem);
        return [...moodList];
      } else {
        return [...moodList, {moods: [moodItem], date: new Date().toLocaleDateString() }];
      }
    });
  }

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <MoodForm handleSubmit={handleSubmit} />

        <div className="moodLists">
          {moodList.map((moodObject, k) => (
            <MoodItem key={k} moodObject={moodObject} handleSubmit={handleSubmit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;

