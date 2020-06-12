import React from 'react'
import { Card } from 'semantic-ui-react'

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


    l

  render(){
    // console.log(this.props.rapper)
    // {this.props.handleClick}
    return(
      
   <Card onClick={this.handleClick}>
      <Card.Content>
      <Card.Header>{this.props.rapper.name}</Card.Header>
          <Card.Description>
          <div>
             <p>{this.props.rapper.hometown}</p>
          </div>
          </Card.Description>
      </Card.Content>
  </Card>

    )
  }

}
