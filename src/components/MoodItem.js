import React, { useState } from "react";
import MoodItemForm from "./MoodItemForm";

const MoodItem = ({ moodObject ,  handleSubmit }) => {
  const [editToggle, setEditToggle] = useState(false);
  const { date, moods } = moodObject;
 
 
    if (editToggle === false) {
      return (
        <div>
          <h1>Day: {date} </h1>
          {moods.map(moodItem => (
            <div>
              Your Mood was: {moodItem.mood} at: {moodItem.time}
              <button
                onClick={toggle => toggle = setEditToggle(true)}
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
              <MoodItemForm moodItem={moodItem} handleSubmit={handleSubmit} setEditTogle={setEditToggle} />
            </div>
          ))}
        </div>
      );
    }
 
};

export default MoodItem;
