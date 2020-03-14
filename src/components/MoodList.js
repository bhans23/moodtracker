import React from "react";

const MoodList = ({ moodList }) => {
  const { mood, date, time } = moodList;

  return (
    <div>
      <h1>Day: {date}</h1>
      
  <p>At: {time} , your mood was: {mood}</p>
    </div>
  );
};

export default MoodList;
