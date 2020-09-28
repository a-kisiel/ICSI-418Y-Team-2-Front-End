import React, {Component} from 'react'

import {MenuItems} from './MenuItems'
import  './NavBar.css'


class NavBar extends Component{
   
    render() {
      return (

       <div className="header">
          <nav className="navbar">
         
                <div className="logo">
                    <a href="/home">
                        <span id="logo_a">FAN</span>
                        <span id="logo_b">NBB</span>
                    </a>
                </div>
            
              
              <div className="nav-right">
                  <ul className="link-wrapper">
                  {MenuItems.map((item,index)=>{
                      return(
                        <li key={index} className="item-wrapper">
                          <a className={item.class_name} href={item.url} onClick={this.handleClick}>{item.title} </a>
                          </li>
                      )
                    }

                    )}
                  
                  
                </ul>
                <div className="mene-bars"></div> 
             </div>
           </nav>
       </div>
      );
       
    }
  }
  
  export default NavBar;