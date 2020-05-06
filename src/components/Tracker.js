import React from "react";

import MoodItem from "./MoodItem";
import MoodForm from "./MoodForm";
import MoodGraph from "./MoodGraph";
import "../css/Tracker.css";
import useMoodList from '../services/useMoodList'



const Tracker = () => {
  
  const {moodList, setMoodList} = useMoodList();

  const handleUpdate = (moodObject) => {
    const dateObject = moodList.find(
      (moodDateObject) => moodDateObject.date === moodObject.date
    );

    setMoodList((moodList) => {
      dateObject.moods = dateObject.moods.map((mood) =>
        mood.time === moodObject.moods[0].time
          ? { time: mood.time, mood: moodObject.moods[0].mood }
          : { ...mood }
      );

      return [...moodList];
    });
  };

  const handleSubmit = (moodItem) => {
    setMoodList((moodList) => {
      const moodObject = moodList.find(
        (moodObject) => moodObject.date === new Date().toLocaleDateString()
      );
      if (moodObject) {
        moodObject.moods = [moodItem, ...moodObject.moods];
        return [...moodList];
      } else {
        return [
          ...moodList,
          { moods: [moodItem], date: new Date().toLocaleDateString() },
        ];
      }
    });
  };

  return (
    <>
      <div className="tracker">
        <h1>Mood Tracker 5000 !</h1>
        <p>This is going to be the best mood tracker...maybe...perhaps</p>
        <div className="slideContainer">
          <MoodForm handleSubmit={handleSubmit} />

          <div className="moodLists">
            {moodList.map((moodObject, k) => (
              <MoodItem
                key={k}
                moodObject={moodObject}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>
        </div>
        <div>
          <MoodGraph moodList={moodList} />
        </div>
      </div>
    </>
  );
};

export default Tracker;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [moodList, setMoodList] = useState([
//     {
//       moods: [
//         { mood: 3, time: "2020-04-26T07:15:00.000Z" },
//         { mood: 6, time: "2020-04-26T07:20:00.000Z" },
//         { mood: 10, time: "2020-04-26T07:35:00.000Z" },
//       ],
//       date: "4/26/2020",
//     },
//   ]);
//   console.log(moodList);

//   useEffect(() => {
// const x = [{ a: 1, b: 3 }, { a: 2, b: 4}, { a: 3, b: 5}];

// x.map(obj => ({ ...obj })); // [{ a: 1, b: 3 }, { a: 2, b: 4}, { a: 3, b: 5}];
// x.map(obj => ({ ...obj, a: 5 })); // [{ a: 5, b: 3 }, { a: 5, b: 4}, { a: 5, b: 5}];
// x.map(obj => obj.a = 5); // [5, 5, 5]
// x.map(obj => obj.a = 5); // [5, 5, 5]
//     moodList.map(moodObject => ({... moodObject}, moodObject.moods.map(moodObject => moodObject.time = new Date(moodObject.time))))
//   console.log(moodList);
//   })

//   return (
//     <>
//       <h1>THe Page</h1>
//     </>
//   );
// };

// export default App;
