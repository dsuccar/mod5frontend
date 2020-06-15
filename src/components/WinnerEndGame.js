import React from 'react'
import { Button,Route } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class WinnerEndGame extends React.Component {

  selectNew = () => {
    this.props.history.push('/select_rapper')
  }
  // tryAgain = () => {
  //   this.props.history.push('/battle')
  // }
  logout = () => {
    this.props.history.push('')
  }
render(){
  return(
    <div>
      <h1>You won!</h1>
     
      {/* <Button primary onClick={this.tryAgain}>Try again?</Button> */}
        <Button primary onClick={this.selectNew}>Select New Rapper</Button>
        <Button secondary onClick={this.logout}>Logout?</Button>
    </div>
  )
}}
export default withRouter(WinnerEndGame);
// this.props.history.push('/end_game')