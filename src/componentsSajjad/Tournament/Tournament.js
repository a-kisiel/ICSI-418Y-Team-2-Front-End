import React, { Component } from 'react';



class Tournament extends Component {
  render() {
    return (
      <div>
    
        <div className="tournament-insights">
          <div className="left-tournament-action">
          <input type="text" placeholder="Search Tournament"></input>
          <li><a href="#">Create New Custom Tournament</a></li>
          </div>

          <div>
            <p>Current/Upcomming Tournments</p>
            <div>Official NBA 2020</div>
            <div>Custom NBA 2020</div>
          </div>

          <div>
            <p>Past Tournments</p>
            <div>Official NBA 2019</div>
            <div>Custom NBA 2019</div>
          </div>
     
        </div>
      </div>
    )
  }
}

export default Tournament;
