import React from 'react'
import { Card } from 'semantic-ui-react'

export default class BossCard extends React.Component {




    

  render(){
    return(
       
      <Card>
      <Card.Content>
        <Card.Header>
          {this.props.bossRapperInfo.name}
        </Card.Header>
        <Card.Description>
          
            <div>{this.props.bossRapperInfo.hp}</div>

        </Card.Description>
      </Card.Content>
    </Card>
    

    )
  }

}
