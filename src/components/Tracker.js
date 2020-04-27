import React, { useState } from "react";
import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import MoodGraph from "./MoodGraph";
import "../css/Tracker.css";

const Tracker = () => {
  const [moodList, setMoodList] = useState([
    {
      moods: [
        { mood: 3, time: new Date("July 21, 2020 01:15:00") },
        { mood: 6, time: new Date("July 21, 2020 03:15:00") },
        { mood: 10, time: new Date("July 21, 2020 03:15:00") },
      ],
      date: "4/26/2020",
    },
  ]);
  console.log(moodList);

  const handleUpdate = (moodObject) => {
    const dateObject = moodList.find(
      (moodDateObject) => moodDateObject.date === moodObject.date
    );

    setMoodList((moodList) => {
      dateObject.moods = dateObject.moods.map((mood) =>
        mood.time === moodObject.moods[0].time
          ? { time: mood.time, mood: moodObject.moods[0].mood }
          : { ...mood }
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
    <>
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
        <div>
          <MoodGraph moodList={moodList} />
        </div>
      </div>
    </>
  );
};

export default Tracker;
