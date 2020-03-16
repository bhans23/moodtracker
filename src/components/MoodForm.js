import React, { useState } from "react";

const MoodForm = ({ handleSubmit }) => {
  const [moodValue, setMoodValue] = useState(0);
  const handleChange = e => {
    setMoodValue(e.target.value);
  };

  return (
    <>
      <h3>{moodValue}</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit({
            mood: moodValue,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          });
        }}
      >
        <input
          type="range"
          min="1"
          max="10"
          value={moodValue}
          className="slider"
          onChange={handleChange}
          id="myRange"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default MoodForm;
