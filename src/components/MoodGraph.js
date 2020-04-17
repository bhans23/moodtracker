import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const MoodGraph = ({ moodList }) => {
  const svg = useRef(null);
  const moodsData = moodList.reduce(
    (acc, curr) => [...acc, ...curr.moods.reverse()],
    []
  );
  console.log(moodsData);
  useEffect(() => {
    d3.select(svg.current)
      .attr("viewBox", [0, 0, 240, 300])
      .append("cricle")
      .attr("cx", 30)
      .attr("cy", 30)
      .attr("r", 20);
  });

  return <svg ref={svg} />;
};

export default MoodGraph;
