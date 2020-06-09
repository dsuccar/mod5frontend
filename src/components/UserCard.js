import React from 'react'
import { Card } from 'semantic-ui-react'

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
   
  render(){
    // console.log(this.props.rapperLyrics)

    return(
      <Card>
      <Card.Content>
        <Card.Header>
          {this.props.userRapperInfo.name}
        </Card.Header>
        <Card.Description>
          
            <div>{this.props.userRapperInfo.hp}</div>

            
           
          
        </Card.Description>
      </Card.Content>
    </Card>

    )
  }

}
