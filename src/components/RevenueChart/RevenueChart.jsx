import React, { Component } from 'react';
import './RevenueChart.css';
import * as d3 from 'd3'

class Chart extends React.Component {
  componentDidMount(){
    const data = this.props.data;
    var margin = {left:100, right:25, top:40, bottom:45}
    var width = 540 - margin.left - margin.right
    var height = 300 - margin.top - margin.bottom

    var svg = d3.select("#chart-area").append("svg")
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)

    var g =svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .style('stroke', 'white')

    var parseTime = d3.timeParse("%Y-%m-%d");

    data.forEach((d) =>{
      console.log(parseTime(d.updated));
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


    var xAxisCall = d3.axisBottom(x).tickValues(d3.extent(data, d => d.updated));
    var xAxisGroup =  g.append("g").attr("transform", "translate(0, " + height + ")")

    xAxisGroup.call(xAxisCall);
    xAxisGroup.selectAll('text').attr('fill', 'white')
    xAxisGroup.selectAll('line').attr('stroke', 'white')
    xAxisGroup.selectAll('path').attr('stroke', 'white')


    var yAxisCall = d3.axisLeft(y).tickValues([0, d3.max(data, d => d.revenuePerDay)]);
    var yAxisGroup = g.append('g').attr('transform', 'translate(-30, 0)');

    yAxisGroup.call(yAxisCall);
    yAxisGroup.selectAll('text').attr('fill', 'white')
    yAxisGroup.selectAll('line').attr('stroke', 'white')
    yAxisGroup.selectAll('path').attr('stroke', 'white')

      // Add the valueline path.
    g.append("path")
         .data([data])
         .attr("class", "line")
         .attr('stroke', '#E34D8E')
         .attr('stroke-width', '2px')
         .attr("d", valueline);

  ////////////// tool tip /////////////////
    const circles = g.selectAll('circle').data(data);

    circles
      .enter()
      .append('circle')
      .attr('cx', d => x(d.updated))
      .attr('cy', d => y(d.revenuePerDay))
      .attr('r', 6)
      .attr('fill', '#000')
      .attr('stroke', '#E34D8E')
      .attr('stroke-width', '2px');

    g.append('line')
      .attr('x1', 0)
      .attr('y1', 100)
      .attr('x2', x(d3.max(data, d => d.updated)))
      .attr('y2', 100)
      .attr('stroke', '#42A2F8')
      .attr('stroke-width', '3px');

    // const tip = d3Tip()
    //   .attr('class', 'd3-tip')
    //   .html

    g.append('text')
      .text('Revenue ($)')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .attr('x', -(height / 2))
      .attr('y', -60)
      .attr('fill', 'white')
      .attr('font-weight', 'lighter');

    g.append('text')
      .text('Time (days)')
      .attr('text-anchor', 'middle')
      .attr('x', (width / 2) - 10)
      .attr('y', height + 40)
      .attr('fill', 'white')
      .attr('font-weight', 'lighter');


}

  render() {
    return (
      <div>
        <section className="legend">
          <div>
            <span>Monthly Avg</span>
            <span>Daily</span>
          </div>
          <span>Tpday: {this.props.todayRev}</span>
        </section>
        <div id="chart-area"></div>
      </div>
    );
  }
}

export default Chart;
