import React from 'react'
import { Button,Route } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class EndGame extends React.Component {

  tryAgain = () => {
    this.props.history.push('/battle')
  }
render(){
  return(
    <div>
      <h1>Game over</h1>
     
        <Button primary onClick={this.tryAgain}>Try again?</Button>
        <Button primary>Select New Rapper</Button>
        <Button primary >Try again?</Button>
       
    </div>
  )
}}
export default withRouter(EndGame);
// this.props.history.push('/end_game')