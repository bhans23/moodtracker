import React, { useState } from "react";

const MoodItemForm = props => {
  const { moodItem, handleSubmit, date } = props;
  const [moodUpdateValue, setMoodUpdateValue] = useState("");
  const [editToggle, setEditToggle] = useState(false);

  const handleUpdate = e => {
    e.preventDefault();
    console.log(e);
    const moodObject = { date: date, moods: [e.target.value] };
    setEditToggle(false);
    handleSubmit(moodObject);
    
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
          <form onSubmit={handleUpdate}>
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
