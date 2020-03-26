import React from "react";

const MoodItem = ({ moodObject }) => {
  console.log(moodObject);
  const { date, moods } = moodObject;
  
  return (
    <div>
      <h1>Day: {date} </h1> 
       {moods.map(moodItem => (
        <div>
          Your Mood was: {moodItem.mood} at: {moodItem.time}
        </div>
      ))}
    </div>
  );
};

export default MoodItem;


