import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = moodValue => {
    // const MoodObject = {};

    // MoodObject.moods = [moodValue];
    // MoodObject.date = new Date().toLocaleDateString();
    // MoodObject.moods[0].time = new Date().toLocaleTimeString();
    setMoodList(moodList => {
      const moodObject = moodList.find(
        dateObject => dateObject.date === new Date().toLocaleDateString()
      );
      if (moodObject) {
        moodObject.moods = [moodValue];
        moodObject.moods[0].time = new Date().toLocaleTimeString();
      } else {
        const newMoodObject = {};

        newMoodObject.moods = [moodValue];
        newMoodObject.date = new Date().toLocaleDateString();
        newMoodObject.moods[0].time = new Date().toLocaleTimeString();

        return [...moodList, newMoodObject];
      }
    });
  };

  return (
    <div className="tracker">
      <h1>Mood Tracker 5000!</h1>
      <p>This is going to be the best mood tracker...maybe...perhaps</p>
      <div className="slideContainer">
        <MoodForm handleSubmit={handleSubmit} />

        <div className="moodLists">
          {moodList.map((moodObject, k) => (
            <MoodItem key={k} moodObject={moodObject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;

// const handleSubmit = moodValue => {
//   setMoodList(moodList => {
//     const moodObject = moodList.find(...);
//     if (moodObject) {
//       modify mood object
//       return [...moodList]
//     } else {
//       return [...moodList, newMoodObject];
//     }
//   });
