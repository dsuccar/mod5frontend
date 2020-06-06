import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class RapperCard extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedRapper: ''
    }

  }


    handleClick = () => {
        this.props.selectRapper(this.props.rapper)
       
    }

  render(){
    console.log(this.state)
    // {this.props.handleClick}
    return(
      
   <Card onClick={this.handleClick}>
      <Card.Content>
      <Card.Header>{this.props.rapper.name}</Card.Header>
          <Card.Description>
          <div>
             <p>{this.props.rapper.bio}</p>
          </div>
          </Card.Description>
      </Card.Content>
  </Card>

    )
  }

}
