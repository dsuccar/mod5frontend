import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'


export default class NavBar extends Component {

  render(){
    // console.log(this.props.user)
    return(
      <Header as='h1' >

    Rap Lyric Battle
    <Header.Subheader>
    created by Danny
    </Header.Subheader>
  </Header>
    )
  }
}