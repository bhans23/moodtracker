import React, { useState } from "react";

const MoodItemForm = props => {
  const { moodItem, handleSubmit, date } = props;
  const [moodUpdateValue, setMoodUpdateValue] = useState("");
  const [editToggle, setEditToggle] = useState(false);

  const handleUpdate = e => {
    console.log(e);
    const moodObject = { date: date, moods: [e.target.value] };
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              at: {moodItem.time}
            </label>

            <button
              onClick={toggle => (toggle = setEditToggle(false))}
              type="submit"
            >
              Submit
            </button>
          </form>
        </>
      </div>
    );
  }
};

export default MoodItemForm;
