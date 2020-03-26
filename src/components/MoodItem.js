import React from "react";

const MoodItem = ({ moodObject }) => {
  const { date, moods } = moodObject;
  
  return (
    <div>
      <h1>Day:{date} </h1> 
       {moods.map(moodTime => (
        <div>
          Your Mood was: {moodTime.mood} at: {moodTime.time}
        </div>
      ))}
    </div>
  );
};

export default MoodItem;


