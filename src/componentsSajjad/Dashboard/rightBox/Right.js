import React, { Component } from 'react';

import './Right.css'
//import './Data'

class Right extends Component {
    state={isLoaded:false}
    componentDidMount() {
        
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        var date=(new Date(new Date()-tzoffset).toISOString().slice(0,10)).replaceAll('-','');
        
        fetch("https://data.nba.net/prod/v2/"+date+"/scoreboard.json",{headers:{
            'Access-Control-Allow-Origin':'*'
            }})
          .then(res=> res.json())
          .then(
            (result)=> {
              this.setState({
                isLoaded: true,
                totalGames:result['games'].length,
                items: result['games']

                
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error)=> {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
  render() {
    console.log(this.state.items)
   
    return (
        <div className="right" >

        <div className="score-box-wrapper">
            <div className="score-title" >Score Box</div>
            <div className="score-box-outer">
                {this.state.isLoaded?Object.entries(this.state.items).map(([key, value], i)=>
                <div className="match-score-box" key={i} id={value['gameId']}>
                    <ul className="score-box-left" >
                        <li className="teamA-score-li" >
                            <div className="logo-li" ><img className="score-img" src={require('../../logos/'+value['hTeam']['triCode']+".svg")} alt="logo" ></img></div>
                            <div className="title-li" id={value['hTeam']['teamId']} >{value['hTeam']['triCode']}</div>
                            <div className="points-li"><i>{value['hTeam']['score']}</i></div>
                
                        </li>
                        <li className="teamB-score-li" >
                            <div className="logo-li" ><img className="score-img" src={require('../../logos/'+value['vTeam']['triCode']+".svg")} alt="logo" ></img></div>
                            <div className="title-li" id={value['vTeam']['teamId']} >{value['vTeam']['triCode']}</div>
                            <div className="points-li"><i>{value['vTeam']['score']}</i></div>

                        </li>
                    </ul>
                    <ul className="score-box-right" >{(!value['isGameActivated'])?(value['period']['current']===0)?value['startTimeEastern']:"Match Ended":"Q"+value['period']['current']+" "+value['clock']}
                        {/* Q4 <br></br> 09:09 */}
                    </ul>
                </div>  
            ):""}
            
                   
            </div>  
        </div>



        <div className="schedule-box-wrapper">
        <div className="score-title" >News</div>
            <div className="score-box-outer">
               
            
                   
            </div>  
        </div>
            
            
            
        


        </div>
    )
  }
}

export default Right;