import React, { Component } from 'react';

import './Matches.css'

class Matches extends Component {
  render() {
    return (
      <div className="main-match">

     
    
          <div className="wrapper">
                 <div className="global-matches">
                      <div className="match-category">Official Matches</div>
                       <ul className="tabs">
                        <li className="tab-a active">Recent Matches</li>
                        <li className="tab-b">Past Matches</li>
                      </ul>
                      <div className="match-list-wrapper">
                            <div className="match-items">
                               <ul className="match-header">
                                <li className="date">Date Time</li>
                                <li className="btn-create-team"><span >Create Team</span></li>
                              </ul>
                              <div className="inner-container-match">
                                    <div className="hTeam">
                                      <div><img className="match-img" src={require('../logos/BKN.svg')} alt="team logo"></img></div>
                                      <div>BKN</div>
                                    </div>
                                    <div className="middle-box">at</div>
                                    <div className="vTeam">
                                    <div><img className="match-img" src={require('../logos/CHA.svg')} alt="team logo"></img></div>
                                      <div>CHA</div>
                                    </div>
                              </div>
                              
                            </div>
                      </div>
                  </div>



                  <div className="friends-matches">
                      <div className="match-category">Custom Matches</div>
                       <ul className="tabs">
                        <li className="tab-a active">Recent Matches</li>
                        <li className="tab-b">Past Matches</li>
                      </ul>
                      <div className="match-list-wrapper">
                            <div className="match-items">
                               <ul className="match-header">
                                <li className="date">Date Time</li>
                                <li className="btn-create-team"><span >Create Team</span></li>
                              </ul>
                              <div className="inner-container-match">
                                    <div className="hTeam">
                                      <div><img className="match-img" src={require('../logos/BKN.svg')} alt="team logo"></img></div>
                                      <div>BKN</div>
                                    </div>
                                    <div className="middle-box">at</div>
                                    <div className="vTeam">
                                    <div><img className="match-img" src={require('../logos/CHA.svg')} alt="team logo"></img></div>
                                      <div>CHA</div>
                                    </div>
                              </div>
                              
                            </div>
                      </div>
                  </div>




                  


          </div>

              

     </div>
     
    )
  }
}

export default Matches;
