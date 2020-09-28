import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard'
import ChatBox from './ChatBox'
import './Left.css';

class Left extends Component {
  render() {
    return (
      

    <div className="left" >
		      	<LeaderBoard/>
            <ChatBox/>
			
		</div>
    )
  }
}

export default Left;










