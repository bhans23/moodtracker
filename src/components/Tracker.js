import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = moodObject => {
    // const currentMoodObject = moodList.find(
    //   moodObject => moodObject.date === new Date().toLocaleDateString()
    // );
    // console.log(currentMoodObject);
    // if (moodObject.date === moodList.date) {
    // } else {
    // }

    // const addMoodObject = () => {};

    setMoodList(moodList => [
      ...moodList,

      {
        moodObject
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
