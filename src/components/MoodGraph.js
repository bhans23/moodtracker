import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


const MoodGraph = ({ moodList }) => {
  const [mountUpdate, setMountUpdate] = useState(null);
  const svg = useRef(null);
  const moodsData = moodList.reduce(
    (acc, curr) => [...acc, ...curr.moods],
    []
  ).reverse();

  useEffect(() => {
    
    const margin = { top: 0, right: 30, bottom: 30, left: 30 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleTime().range([19, width]);
    x.domain(d3.extent(moodsData, (d) => d.time));

    const y = d3.scaleLinear().range([height, 19]);
    y.domain([0, 10]);

    d3.select(svg.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("viewbox", [0, 0, width, height]);

    d3.select(svg.current)
      .append("g")
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    const path = d3.select(svg.current).select("g").append("path");

    // enter
    path
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      

    // update
    path
      .datum(moodsData)
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.time))
          .y((d) => y(d.mood))
      );

    const xAxis = d3.select(svg.current)
      .append("g")
      .attr("transform", `translate(0, ${height})`);
    xAxis.call(d3.axisBottom(x));

   const yAxis = d3.select(svg.current)
      .append("g")
      .attr("transform", "translate(15, 0)")
      yAxis.call(d3.axisLeft(y));

    setMountUpdate({ path, x, y, xAxis, yAxis }); // once
  }, []);

  useEffect(() => {
    if (mountUpdate) {
      const { path, x, y, xAxis, yAxis} = mountUpdate;
      x.domain(d3.extent(moodsData, (d) => d.time));
      y.domain([0,10]);
      // update
      path.datum(moodsData)
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.time))
          .y((d) => y(d.mood))
      )
     

    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y));
      
    }
  }, [moodsData, mountUpdate]);

  return <svg ref={svg} />;
};

export default MoodGraph;

// const [state, setState] = useState(null);

// useEffect(() => { // componentDidMount
//   // initial setup
//   // constant lineFuncs
//   setState({ constants });
// }, []);

// useEffect(() => { // componentWillUpdate
//   if (state) {
//   // update stuffs
//   }
// }, [state]);
