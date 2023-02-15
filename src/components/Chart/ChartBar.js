import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {

  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
  }


    //using react to change the style dynamically. Using the built-in style property and 
    //using {} to use react inside. And the style receives an object, therefore it becomes
    //style={{height: someHeight, backgroundColor: color}}. 
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}; //end of component

export default ChartBar;
