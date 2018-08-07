import React, { Component } from 'react';
import './RevenueChart.css';
import * as d3 from 'd3'

class Chart extends React.Component {
  componentDidMount(){
    const data = this.props.data;
    var margin = {left:100, right:10, top:10, bottom:100}
    var width = 600 - margin.left - margin.right
    var height = 400 - margin.top - margin.bottom

    var svg = d3.select("#chart-area").append("svg")
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)

    var g =svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var parseTime = d3.timeParse("%Y-%m-%d%H:%M:%S");

    data.forEach((d) =>{
      d.updated = parseTime(d.updated);
      d.revenuePerDay = parseFloat(d.revenuePerDay.slice(1));
    })

    var x = d3.scaleTime()
    .range([0,width])


    var y = d3.scaleLinear()
      .range([height, 0])


    // define the line
    var valueline = d3.line()
      .x(function(d) { return x(d.updated); })
      .y(function(d) { return y(d.revenuePerDay); });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.updated; }));
    y.domain([0, d3.max(data, function(d) { return d.revenuePerDay; })]);


    var xAxisCall = d3.axisBottom(x);
      g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall);

    var yAxisCall = d3.axisLeft(y);
      g.append("g")
        .attr("class", "y axis")
        .call(yAxisCall);

      // Add the valueline path.
    g.append("path")
         .data([data])
         .attr("class", "line")
         .attr("d", valueline);
}

  render() {
    return (
      <div className="container">
        <div id="chart-area"></div>
      </div>
    );
  }
}

export default Chart;
