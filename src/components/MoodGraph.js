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
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.select(svg.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    
      const x = d3
        .scaleTime()
        .domain(d3.extent(moodsData, (d) => d.time))
        .range([0, width]);

      d3.select(svg.current)
        .append("g")
        .attr("transform", "translate(0, " + height + ")")
        .call(d3.axisBottom(x));

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(moodsData, (d) => +d.mood)])
        .range([height, 0]);

      d3.select(svg.current).append("g").call(d3.axisLeft(y));

      d3.select(svg.current)
        .append("path")
        .datum(moodsData)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3.line().x((d) => x(d.time)).y((d) => y(d.mood))
        );
      
    
    
  });

  return <svg ref={svg} />;
};

export default MoodGraph;
