import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

export default class UserCard extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     randomLyric: null
  //   }
  // }



//   randomLyric = () => {
//   if (this.props.rapperLyrics != null) {
//      return  this.props.rapperLyrics[Math.floor(Math.random() * this.props.rapperLyrics.length)]
//   }

// }
myTurnStyle = {
  border: "5px solid",
  borderColor: "#de2f2f"
}
  render(){

    return(
    
      <div>
         {!this.props.userRapperInfo.myTurn ?
         <Grid>
       <Grid.Row>
       <Grid.Column>
        <h1>{this.props.userRapperInfo.name}</h1>
        <div>{this.props.userRapperInfo.hp}</div>
       </Grid.Column>
 
     </Grid.Row>
     </Grid>
      :
      <Grid>
      <Grid.Row>
      <Grid.Column style={this.myTurnStyle}>
      <h1>{this.props.userRapperInfo.name}</h1>
      <div>{this.props.userRapperInfo.hp}</div>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      }
      </div>
        
    )
  }

}
