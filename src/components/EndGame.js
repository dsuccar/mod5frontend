import React from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class EndGame extends React.Component {

  selectNew = () => {
    this.props.history.push('/select_rapper')
  }
  tryAgain = () => {
    this.props.history.push('/battle')
  }
  logout = () => {
    this.props.history.push('')
  }
render(){
  return(
    <div>
      
     
        <Button primary onClick={this.tryAgain}>Try again?</Button>
        <Button primary onClick={this.selectNew}>Select New Rapper</Button>
        <Button secondary onClick={this.logout}>Logout?</Button>
        <Grid>
      
      <Grid.Row >
        {/* <Grid.Column></Grid.Column> */}
        <Grid.Column verticalAlign='middle'>
        <h1>1st Place! Congratulations,{this.props.bossRapper.name}!</h1>
       <Image src={this.props.bossRapper.gif} style={{padding: "100px"}} centered ></Image>
      
        </Grid.Column>
        </Grid.Row>
        <Grid.Row >
        <Grid.Column verticalAlign='middle'>
        <h5>2nd Place, #YouAreWhatYouListenTo {this.props.userRapper.name}.</h5>
        <Image src={this.props.userRapper.gif} centered ></Image>
       
        </Grid.Column>
        </Grid.Row>
        </Grid>
     
    </div>
  )
}}
export default withRouter(EndGame);
// this.props.history.push('/end_game')