import React, {Component} from 'react'
import Left from './leftBox/Left'
import Center from '../Dashboard/centerBox/Center'

import  './Dashboard.css'
import Right from './rightBox/Right'


class Dashboard extends Component{
   
    render() {
      return (
        
<section className="main">
	  <div className="banner-welcome-name"><p>Welcome </p></div>
    <div className="inner-container">
      <div className="main-wrapper" >
              <Left/>
              <Center/>
              <Right/>
          </div>
    </div>
</section>
      );
       
    }
  }
  
  export default Dashboard;