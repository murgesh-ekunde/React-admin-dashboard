import React from 'react'
import data from '../Dashboard/Data';
import Datacard from '../Dashboard/Datacard';
import './Cardstyling.css'

function Cardpage() {
  return (
    <div className='cardpage-body'>
        <div>
        <h1> Cards </h1>
        <div className="cards-body">
        <div className="row">
        {data.map((value) => {
        return (
            <Datacard
              key={value.id}
              name={value.name}
              icon={value.icon}
              progress={value.progress}
              content={value.content}
              color={value.color}
            />
        );
      })}
        </div>
        </div>
        </div>

        <div className="info-cards">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                        Default Card Example 
                        </div>
                        <div className="card-body">
                        This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example. 
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        Basic Card Example 
                        </div>
                        <div className="card-body">
                        The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS! 
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                        Dropdown Card Example
                        </div>
                        <div className="card-body">
                        Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.  
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        Collapsable Card Example
                        </div>
                        <div className="card-body">
                        This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!  
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Cardpage