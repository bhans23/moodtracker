import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = moodObject => {
    const currentMoodObject = {};

    currentMoodObject.moods = [moodObject];
    currentMoodObject.date = new Date().toLocaleDateString();
    currentMoodObject.moods[0].time = new Date().toLocaleTimeString();

    setMoodList(moodList => [...moodList, moodObject]);
   

    const getMoodObject = currentMoodObject => {
      const findSameDateObject = moodObject => {
        return moodObject.date === new Date().toLocaleDateString();
      };
      const sameDateObject = moodList.find(findSameDateObject);
      moodList.find(findSameDateObject)
        ? (sameDateObject.moods[1] =
            currentMoodObject &&
            setMoodList(moodList => [...moodList, currentMoodObject]))
        : setMoodList(moodList => [...moodList, currentMoodObject]);
    };

    getMoodObject(currentMoodObject);
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

// const currentMoodObject = moodList.find(moodObject => moodObject.date === todaysDate);
// if (currentMoodObject) {
//   add a mood to an array on this currentMoodObject
// } else {
//   add a new moodObject to moodList
// }
