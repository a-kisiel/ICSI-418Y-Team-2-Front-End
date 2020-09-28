import React, { Component } from 'react';
import {matchSummary} from './Data'
import './Center.css';

class Center extends Component {
  state = {matchSummary}
  
  render() {
   // console.log(this.state)
    return (
      
            <div className="center" > 
            <div >
           <li><a href="/scoreboard.html" className="match-title">{this.state.matchSummary.title}</a></li>
                <li className="time">September 11, 2020</li>
            </div>

            <table>
          <thead>
            <tr>
              {Object.entries(this.state.matchSummary.header).map(([key, value], i)=><th  key={i}> {value}</th>)}
                  </tr> 
                    </thead>
            <tbody>

            
                   
              {Object.entries(this.state.matchSummary.pointsBreakDown).map(([key, value], i)=><tr  key={i} id={value['playerId']}> 
              {Object.entries(value).map(([key, value], i)=>(i===0)?null:<td  key={i}> {value}</td>)}
              </tr>)}
              </tbody>        
        </table>
        </div>

        
      
    
    )
  }
}

export default Center;