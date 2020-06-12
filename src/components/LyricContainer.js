import React from 'react'
import { Card, Grid,Button } from 'semantic-ui-react'


export default class LyricCard extends React.Component {
  constructor() {
    super()
    this.state = {
      randomLyric: null,
      answer: ""
    }

  }

  

  randomLyric = () => {
    
    const lyricArray = this.props.lyrics
    let randomLyric = lyricArray[Math.floor(Math.random() * lyricArray.length)];
     this.setState({
       randomLyric: randomLyric,
      })
  }

  handleChangeAnswer = (event) => {
      // console.log(event.target.value)
  if (this.props.bossInfo.myTurn === true){
      this.setState({
        answer: event.target.value.toLowerCase(),
        turn: "bossTurn"
      })} else {
        this.setState({
          answer: event.target.value.toLowerCase(),
          turn: "userTurn"
        })
      }
    }

  
    
  
    submitAnswerAndClear = (event) => {
      this.props.onHandleSubmitAnswer(this.state.answer, this.state.turn,event)
      this.setState({
        randomLyric: null,
        answer: ""
      })
    }
  render(){
console.log(this.props)
    return(
      <Grid>
      
      <Grid.Row columns={1}>
        <Grid.Column>
   
      {!this.state.randomLyric
      ?
     
      <Button onClick={this.randomLyric}>click here to get lyric
      </Button>
   
      :
      <div>
        <h1>
          {this.state.randomLyric.text}
        </h1>
        <form onSubmit={ event => {this.submitAnswerAndClear(event)}} >
          <input name="answer" 
          placeholder="Title" onChange={this.handleChangeAnswer} 
           />

          <button type="submit">
          Submit
        </button>
        </form>
      </div>
  
  
    }
    </Grid.Column>
 </Grid.Row>

        
        
          
          
      
      
        
      </Grid>
      

  

    )
  }

}
