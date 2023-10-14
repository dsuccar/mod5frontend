import React from 'react'
import {  Grid, Image } from 'semantic-ui-react'

export default class BossCard extends React.Component {

  

  myTurnStyle = {
    border: "8px solid",
    borderColor: "#db4848",
    height: "440px",
    padding: "0px 0px"
    // marginLeft: auto;
    // margin right: auto
    
    // padding: "0px 0px"
  }
  theirTurnStyle = {
    height: "440px",
    padding: "0px 0px"
  }
  boarderStyle = {
    padding: "0px 0px"
  }

  render(){
    // console.log(this.props.bossRapperInfo.lives)
// 
    return(
      <div>
        
      {!this.props.bossRapperInfo.myTurn ?
      <Grid>
        <Grid.Row>
          <Grid.Column style={this.theirTurnStyle}>
          <Image src={this.props.bossRapperInfo.gif} centered ></Image>
            <h1>{this.props.bossRapperInfo.name}</h1>
          <Image.Group>
            {/* Heart Icons */}
            {[...Array(this.props.bossRapperInfo.lives).keys()].map( (heart) => <Image src={"/Images/heart-sprite.png"} key={heart} size='mini'/> )}
          </Image.Group>
          </Grid.Column>
    
  </Grid.Row>
  </Grid>
   :
   <Grid>
     <Grid.Row style={this.boarderStyle}>
      <Grid.Column style={this.myTurnStyle}>
      <Image src={this.props.bossRapperInfo.gif} centered ></Image>
        <h1>{this.props.bossRapperInfo.name}</h1>
      <Image.Group>
      {[...Array(this.props.bossRapperInfo.lives).keys()].map( (heart) => <Image src={"/Images/heart-sprite.png"} key={heart} size='mini'/> )}π
        </Image.Group>
   </Grid.Column>
   </Grid.Row>
   </Grid>
   }
   </div>
     

    )
  }

}
