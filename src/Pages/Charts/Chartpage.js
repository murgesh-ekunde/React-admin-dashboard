import React from 'react'
import Chart from '../Dashboard/Chart'
import Progresschart from '../Dashboard/Progresschart'

function Chartpage() {
  return (
    <div className='container-fluid'>
        <h1>
            Charts
        </h1>
        <p> 
        Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the official Chart.js documentation.
        </p>

        <Chart />
        <Progresschart />
    </div>
  )
}

export default Chartpage