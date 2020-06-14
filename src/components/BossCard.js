import React from 'react'
import {  Grid } from 'semantic-ui-react'

export default class BossCard extends React.Component {


  myTurnStyle = {
    border: "5px solid",
    borderColor: "#de2f2f"
  }

    

  render(){
    // console.log(!this.props.bossRapperInfo.myTurn)
// 
    return(
      <div>
      {!this.props.bossRapperInfo.myTurn ?
      <Grid>
    <Grid.Row>
    <Grid.Column>
    <h1>{this.props.bossRapperInfo.name}</h1>
      <div>{this.props.bossRapperInfo.hp}</div>
    </Grid.Column>
    
  </Grid.Row>
  </Grid>
   :
   <Grid>
   <Grid.Row>
   <Grid.Column style={this.myTurnStyle}>
   <h1>{this.props.bossRapperInfo.name}</h1>
      <div>{this.props.bossRapperInfo.hp}</div>
   </Grid.Column>
   </Grid.Row>
   </Grid>
   }
   </div>
     

    )
  }

}
