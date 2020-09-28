import React, { Component } from 'react';
import './Left.css'
import {RankSummary} from './RankSummary'




class LeaderBoard extends Component {
  state = {RankSummary}
  render() {
    return (
      <div>
        <div className="leaderboard-box" >

        {Object.entries(this.state.RankSummary).map(([key, value], i)=> 
            <div className={value['class']} >
                      <li className="leaderboard-score" >
                        <div className="board-logo" ><img className="leaderboard-img" src={require('../../Fonts/'+value['type']+'.svg')}></img></div>
                        <div className="board-rank" >{value['rank']}</div>
                        <div className="board-indic"><img className="leaderboard-img" src={require('../../Fonts/'+value['status']+'.svg')}></img></div>
                        </li>
                
            </div> )}
            
        
            <div className="board-detail" >
                <a href="">View Leaderboard</a>
            </div>

        </div>
        


        </div>
    )
  }
}

export default LeaderBoard;