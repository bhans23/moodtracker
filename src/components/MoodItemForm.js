import React, { useState } from "react";

const MoodItemForm = props => {
  const { moodItem, handleUpdate, date } = props;
  const [moodUpdateValue, setMoodUpdateValue] = useState("");
  const [editToggle, setEditToggle] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const moodObject = { date: date, moods: [{mood: moodUpdateValue}] };
    handleUpdate(moodObject);
    setEditToggle(false);
    
  };


  const handleChange = e => {
    
    setMoodUpdateValue(e.target.value);
  };

  if (editToggle === false) {
    return (
      <div>
        Your Mood was: {moodItem.mood} at: {moodItem.time}
        <button onClick={toggle => (toggle = setEditToggle(true))}>edit</button>
      </div>
    );
  } else {
    return (
      <div>
        <>
          <form onSubmit={handleSubmit}>
            <label for="mood">
              Your Mood was:
              <select id="mood" onChange={handleChange} value={moodUpdateValue}>
                <option value={moodItem.mood}>{moodItem.mood}</option>
                {Array(10)
                  .fill(null)
                  .map((_, x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
              </select>
              at: {moodItem.time}
            </label>
            <button type="submit">Submit</button>
          </form>
        </>
      </div>
    );
  }
};

export default MoodItemForm;
