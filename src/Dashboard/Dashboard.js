import React from 'react'
import data from './Data'
import Datacard from './Datacard'


function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <div className="row">
          <Datacard
         key={data[0].id}
         name={data[0].name}
         icon={data[0].icon}
         progress={data[0].progress}
         content={data[0].content}
         color={data[0].color}
          />
        
        </div>
    </div>
  )
}

export default Dashboard