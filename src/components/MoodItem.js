import React from "react";
import MoodItemForm from "./MoodItemForm";

const MoodItem = ({ moodObject, handleSubmit }) => {
  
  const { date, moods } = moodObject;

 

  return (
    <div>
      <h1>Day: {date} </h1>

      {moods.map(moodItem => <MoodItemForm moodItem={moodItem}/>)}
    </div>
  );
};

export default MoodItem;
