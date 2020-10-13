import React, { Component } from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom';


class Signin extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    
    this.props.submitUser(user)
    // this.props.findBoss(user)
  
    this.setState({ username: "", password: "" })
  }

  guestSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: "guest",
      password: "123456"
    }
    
    this.props.submitUser(user)
   
    this.setState({ username: "", password: "" })
  }

  signIn = {
    paddingTop: "100px"
  }
  render() {
// console.log(this.state, this.state)

    return(

      <Grid columns='equal' style={this.signIn}>
    <Grid.Column >
     
    </Grid.Column>

    <Grid.Column  >
    
      {!!this.state.user? null :
    <Button content='Continue as Guest' onClick={this.guestSubmit} />}
      <Segment>
        
        <Segment placeholder >
        <Grid columns={2}  >
          <Grid.Column >
          <h1>Sign In:</h1>
            <Form>
              <Form.Input
                placeholder='Log In' name='username' type='text' onChange={this.handleChange} value={this.state.username}
              />
              <Form.Input
              placeholder='password' name='password' type='text' onChange={this.handleChange} value={this.state.password}
            />
      
              <Button content='submit' value='Sign In' onClick={this.handleSubmit} />
            </Form>
          </Grid.Column>
    
          <Grid.Column verticalAlign='middle'>
            
            <Button content='New User' icon='signup' size='big' as={Link} to="/new_user"/>
          </Grid.Column>
        </Grid>
    
        <Divider vertical>Or</Divider>
      </Segment>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      
    </Grid.Column>
  </Grid>
    )
  }
} 
export default withRouter(Signin)