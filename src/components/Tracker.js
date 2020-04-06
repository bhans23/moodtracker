import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleUpdate = (moodObject) => {
    console.log(moodObject)
    const dateObject = moodList.find(
      (moodDateObject) => moodDateObject.date === moodObject.date
    );
    console.log(dateObject);

    setMoodList((moodList) => {
      dateObject.moods = dateObject.moods.map((moods) =>
        moods.time === moodObject.time ? { ...moods, mood: moodObject } : {...moods}
      );
      return [...moodList];
    });
  };

  const handleSubmit = (moodItem) => {
    setMoodList((moodList) => {
      const moodObject = moodList.find(
        (moodObject) => moodObject.date === new Date().toLocaleDateString()
      );
      if (moodObject) {
        moodObject.moods = [moodItem, ...moodObject.moods];
        return [...moodList];
      } else {
        return [
          ...moodList,
          { moods: [moodItem], date: new Date().toLocaleDateString() },
        ];
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
            <MoodItem
              key={k}
              moodObject={moodObject}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;
