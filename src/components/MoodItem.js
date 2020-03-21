import React from "react";

const MoodItem = ({ moodObject }) => {
  console.log(moodObject);
  const { mood, date, time } = moodObject;

  return (
    <div>
      <h1>Day: {date}</h1>

      <p>
        At: {time} , your mood was: {mood}
      </p>
    </div>
  );
};

export default MoodItem;
