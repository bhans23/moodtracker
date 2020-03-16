import React from "react";

const MoodForm = (props) => {
  const { moodValue, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default MoodForm;
