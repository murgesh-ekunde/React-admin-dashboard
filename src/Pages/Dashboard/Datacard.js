import React from 'react'
import data from './Data'
import './Dashboard.css'

function Datacard(props) {
    var styles = {
        color: (props.color),
      };
      var cardBorderStyle = {
        borderLeft: "5px solid " +( props.color),
      };

  return (
    <div className="col-3">
      <div className="card" style={cardBorderStyle}>
      <div className="card-body">
        <div className="name" style={styles}>{props.name}</div>
        {props.progress ? (
              <span className="progress">
                <span>{props.progress}% </span>
                <progress style={styles} value={props.progress} max="100" />
              </span>
            ) : (
              <div className="CardContent">{props.content}</div>
            )}
        <div className="iconWrapper">{props.icon}</div>
      </div>
      </div>
    </div>
  )
}

export default Datacard