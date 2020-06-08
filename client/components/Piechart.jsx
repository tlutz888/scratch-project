import React, { Component } from 'react';
import * as d3 from "d3";
const Piechart = (props) => {
const totalTimes = {
    Coding: 4000, Debug: 4000, Meetings: 7000, QA: 0, Code Review: 0, Reasearch: 0, Write Documentation: 0, Other: 0}
    // need to be transformed in
const data = [{label: 'Coding', spending: 4000}, 
    {label:'Debug', spending: 4000}, {label:'Meetings', spending: 7000}, {label:'QA', spending: 0}, 
    {label:'Code Review', spending: 0}, 
    {label:'Reasearch', spending: 0}, 
    {label:'Write Documentation', spending: 0}, 
    {label: 'Other', spending: 0}]
  const colors = [ '#FFCA19', '#FF7142', '#57B54E', '#1AB4D4', '#4EDDCE', '#B577CE', '#CBF39A']
  
  const width = 571,
    chartWidth = 189,
    chartHeight = 189,
    height = 378,
    radius = Math.min(chartWidth, chartHeight) / 2,
    innerRadius = radius - radius + 50;
  
  const formatter = d3.format('$,');
  
  const svg = d3.select('#donut-chart')
    .attr('width', width)
    .attr('height', height);
  
  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(radius);
  
  const pie = d3.pie().value(d => d.spending)
  
  const arcGroup = svg
    .append('g')
    .attr('transform', `translate(${chartWidth / 2},${chartHeight / 2})`)
    .attr('class', 'arc-group');
  
  arcGroup
    .selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc-group')
    .append('path')
    .attr('class', 'arc')
    .attr('d', arc)
    .attr('fill', (d, i) => colors[i])
    .on('mousemove', () => {
      const {clientX, clientY} = d3.event
      d3.select('.tooltip')
        .attr('transform', `translate(${clientX} ${clientY})`)
    })
    .on('mouseenter', d => {
      d3.select('.tooltip').append('text')
        .text(`${d.data.label} - $${d.data.spending}`)
    })
    .on('mouseleave', () => d3.select('.tooltip text').remove())
  
  const tooltipGroup = svg
    .append('g')
    .attr('class', 'tooltip')
}