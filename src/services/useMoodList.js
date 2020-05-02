import {useState, useEffect} from 'react';
import axios from 'axios';

const getMoodObjects = () => axios
  .get("/api/moods")
  .then((res) =>
    res.data.map((moodObject) => ({
      ...moodObject,
      moods: moodObject.moods.map((m) => ({
        ...m,
        time: new Date(m.time),
      })),
    }))
  );

const useMoodList = () => {
  const [moodList, setMoodList] = useState([]); 

  useEffect(() => {
    getMoodObjects().then(setMoodList);
  }, []);


  return { moodList, setMoodList };
}

export default useMoodList;




