import React, { Component } from 'react'
import {  Menu, Header} from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom';



class NavBar extends Component {

  headerClick = () => {
    this.props.history.push(`/`)
  }
  title = {
    paddingTop: "20px"
  }
  

  render(){
    console.log("nav Props", this.props)
    return(
      
      <div>
          <Header style={this.title} onClick={this.headerClick}>
            
          <h1>Alphabet Aerobics</h1>
          <img src={'/images/Logo.png'} alt="AA Logo" width="500" height="600"></img>
     </Header>
   
        <Menu>
            <Menu.Item header>
            
            </Menu.Item>
            
            <Menu.Menu position="left">
           
            {!this.props.user ? null :
              <Menu.Item as={Link} to="/select_rapper">
                  See Rappers
              </Menu.Item>
              }
            {!this.props.user ? null :
              <Menu.Item as={Link} to={'/battle'}>
                  Start New Game
              </Menu.Item>
              }
              </Menu.Menu>
         
            
              <Menu.Menu position="right">
              {!this.props.user ? null :
           
              <Menu.Item onClick={this.props.handleLogout} as={Link} to="/">
                  Logout
              </Menu.Item>
              }
             <Menu.Item header>
            
            </Menu.Item>
            </Menu.Menu>
          </Menu>
    
      
     </div>
    )
  }
}
export default withRouter(NavBar)