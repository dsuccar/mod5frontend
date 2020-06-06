import React, { Component } from 'react'


export default class Signin extends Component {

  constructor() {
    super()
    this.state = {
      username: ""
    }
  }

  handleChange = (event) => {


    this.setState({
      username: event.target.value

    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: this.state.username
    }
    this.props.submitUser(user)
    this.setState({ username: "" })
  }

  render() {


    return (
      <form>
        <input placeholder='Username' name='username' type='text' onChange={this.handleChange} value={this.state.username} />
        <input type='submit' value='Sign In' onClick={this.handleSubmit} />
      </form>
    )
  }
} 