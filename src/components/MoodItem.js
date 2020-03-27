import React, { useState } from "react";
import MoodItemForm from "./MoodItemForm";

const MoodItem = ({ moodObject }, { handleSubmit }) => {
  const [edditToggle, setEditToggle] = useState(false);
  const { date, moods } = moodObject;

  const editMood = () => {
    if (edditToggle === false) {
      return (
        <div>
          <h1>Day: {date} </h1>
          {moods.map(moodItem => (
            <div>
              Your Mood was: {moodItem.mood} at: {moodItem.time}
              <button
                onClick={toggle => (toggle = setEditToggle(!edditToggle))}
              >
                edit
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Day: {date} </h1>
          {moods.map(moodItem => (
            <div>
              <MoodItemForm moodItem={moodItem} handleSubmit={handleSubmit} />
            </div>
          ))}
        </div>
      );
    }
  };

  return <>{editMood()}</>;
};

export default MoodItem;
