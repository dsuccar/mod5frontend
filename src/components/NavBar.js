import React, { Component } from 'react'
import {  Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {

  render(){
    // console.log(this.props.user)
    return(
      <div>
          <Header as="h2">
      Rap Lyric Battle
     </Header>
        <Menu>
            <Menu.Item header>
            
            </Menu.Item>
            
            <Menu.Menu position="left">
              <Menu.Item as={Link} to="/select_rapper">
                  See Rappers
              </Menu.Item>
              <Menu.Item as={Link} to={'/battle'}>
                  Start New Game
              </Menu.Item>
              </Menu.Menu>
               <Menu.Menu position="right">
              <Menu.Item onClick={this.props.handleLogout} as={Link} to="/">
                  Logout
              </Menu.Item>
            </Menu.Menu>
          </Menu>
    
      
     </div>
    )
  }
}