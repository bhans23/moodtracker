import React from "react";

const MoodItem = ({ moodObject }) => {
  const timeMood = () => {
    if (moodObject.mood2) {
      return (
        <>
          <div>
            At: {moodObject.time} , your mood was: {moodObject.mood}
          </div>
          <div>
            At: {moodObject.time2} , your mood was: {moodObject.mood2}
          </div>
        </>
      );
    } else {
      return (
        <p>
          At: {moodObject.time} , your mood was: {moodObject.mood}
        </p>
      );
    }
  };

  return (
    <div>
      <h1>Day: {moodObject.date}</h1>
      {timeMood()}
    </div>
  );
};

export default MoodItem;

// {moodList.map((moodObject, k) => (
//   <MoodItem key={k} moodObject={moodObject} />
// ))}
