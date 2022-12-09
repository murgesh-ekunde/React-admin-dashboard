import React from 'react'

function Buttonpage() {
  return (
    <div className='cardpage-body'>
        <div>
        <h1> Buttons </h1>
        </div>
       

        <div className="info-cards">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                        Circle Buttons
                        </div>
                        <div className="card-body">
                        Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        Brand Buttons
                        </div>
                        <div className="card-body">
                        Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages. You can create more custom buttons by adding a new color variable in the <code> _variables.scss </code> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <code> _buttons.scss </code>file. 
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                        Split Buttons with Icon
                        </div>
                        <div className="card-body">
                        Works with any button colors, just use the <code> .btn-icon-split </code> class and the markup in the examples below. The examples below also use the <code> .text-white-50 h</code>elper class on the icons for additional styling, but it is not required.  
        
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
  )
}

export default Buttonpage