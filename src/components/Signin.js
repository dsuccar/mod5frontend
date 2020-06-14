import React, { Component } from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';


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
  
    this.setState({ username: "", password: "" })
  }

  render() {
// console.log(this.state.username, this.state.password)

    return (
      // <form>
      //   <input placeholder='Username' name='username' type='text' onChange={this.handleChange} value={this.state.username} />
      //   <input type='submit' value='Sign In' onClick={this.handleSubmit} />
      // </form>
      // <Form>
      // <Form.Field>
      //   <h2> Sign In:</h2>
      //    <input  />
      //    <input  />
      //    {/* <Button type='submit' value='Sign In' onClick={this.handleSubmit} >Submit</Button> */}
      //  </Form.Field>
      //  </Form>
      <Grid columns='equal'>
    <Grid.Column>
      
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
        <Segment placeholder>
        <Grid columns={2}  >
          <Grid.Column>
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
            <Button content='New Account' icon='signup' size='big' />
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