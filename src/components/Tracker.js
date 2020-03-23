import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([]);

  const handleSubmit = moodObject => {
    
    const getMoodObject = (currentMoodObject) => {
      if (
        moodList.find(
          moodObject => moodObject.date === new Date().toLocaleDateString()
        ) !== undefined
      ) {
        currentMoodObject = moodList.find(
          moodObject => moodObject.date === new Date().toLocaleDateString()
        );
      } else {
        currentMoodObject = "";
      }

      if (currentMoodObject !== "") {
        currentMoodObject.mood2 = moodObject.mood;
        currentMoodObject.time2 = moodObject.time;
        setMoodList(moodList => [...moodList, currentMoodObject]);
      } else {
        setMoodList(moodList => [...moodList, moodObject]);
      }
    };
 
    getMoodObject(moodObject);
    

    

    
  };
  console.log(moodList)

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
