import React from 'react';
import './Dashboard.css'

function Progresschart() {
  return (
    <div className="progressbarWrapper">
    <div className="progressbarHeader">Projects</div>
    <div className="progressBarBlock">
      <label className="label" htmlFor="project1">
        Server Migration <span>20%</span>
      </label>
      <progress className="progress" value="20" max="100" id="project1">
        20%
      </progress>
      <label className="label" htmlFor="project2">
        Sales Tracking <span>40%</span>
      </label>
      <progress className="progress" value="40" max="100" id="project2">
        40%
      </progress>
      <label className="label" htmlFor="project3">
        Customer Database <span>60%</span>
      </label>
      <progress className="progress" value="60" max="100" id="project3">
        60%
      </progress>
      <label className="label" htmlFor="project4">
        Payout Details <span>80%</span>
      </label>
      <progress className="progress" value="80" max="100" id="project4">
        80%
      </progress>
      <label className="label" htmlFor="project5">
        Account Setup <span>Complete!</span>
      </label>
      <progress className="progress" value="100" max="100" id="project5">
        100%
      </progress>
    </div>
  </div>
  )
}

export default Progresschart