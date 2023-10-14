import UserCard from './UserCard'
import LyricContainer from './LyricContainer'
import BossCard from './BossCard'
import React from 'react'
import update from 'immutability-helper'

import { Grid, Segment, Image } from 'semantic-ui-react'
// import { Card } from 'semantic-ui-react'

export default class BattleContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      userRapperInfo: {
        name: null,
        bio: null,
        // lives: 1,
        hometown: null,
        myTurn: null
      },
      userRapperLyrics: null,
      bossRapperInfo: {
        name: null,
        bio: null,
        // lives: 1,
        hometown: null,
        myTurn: null
      },
      bossRapperLyrics: null,
     
    }

  }

  componentDidMount(){
    

  fetch(`http://localhost:3000/rappers/${this.props.selectedRapper.id}`)
  .then(resp => resp.json())
  .then(userRapper => this.setState({
    userRapperInfo: {
      name: userRapper.name,
      bio: userRapper.bio,
      lives: userRapper.lives,
      hometown: userRapper.hometown,
      myTurn: true,
      isTrue: null,
      gif: userRapper.gif

    },
    userRapperLyrics: userRapper.lyrics
    })
  )
  
  fetch(`http://localhost:3000/rappers/${this.props.bossRapper.id}`)
  .then(resp => resp.json())
  .then(bossRapper => this.setState({
    bossRapperInfo: {
      name: bossRapper.name,
      bio: bossRapper.bio,
      lives: bossRapper.lives,
      hometown: bossRapper.hometown,
      myTurn: false,
      isTrue: null,
      gif: bossRapper.gif
    },
    bossRapperLyrics: bossRapper.lyrics

  })
  )
  
} 


onHandleSubmitAnswer = (questionAnswer,answer, turn, event) => {
  event.preventDefault()
  let bossAnswerCorrect = this.state.bossRapperLyrics.filter(lyric => lyric.answer === answer)
  let userAnswerCorrect = this.state.userRapperLyrics.filter(lyric => lyric.answer === answer)


// determining when to end the game
// if its users turn and user [] > 0 (meaning that answer is correct) && boossrapper has more than 1 life:
// debugger

if (turn === "userTurn" && !!userAnswerCorrect[0] && this.state.bossRapperInfo.lives - 1 === 0){
  this.props.endGame(this.state.bossRapperInfo.lives - 1,this.state.userRapperInfo.lives)

// else if its the boss turn and boss is incorrect && user has more than 0 lives 
// push to end game that user loses a life
  }else if (turn === "bossTurn" && !!bossAnswerCorrect[0] && this.state.userRapperInfo.lives - 1 === 0)
this.props.endGame(this.state.bossRapperInfo.lives ,this.state.userRapperInfo.lives - 1)






let userRapperInfo ={...this.state.userRapperInfo}

// modifying state lives& turn
  if (turn === "userTurn") {
    if (!!userAnswerCorrect[0]){
      debugger
      // let newUserState = this.state.userRapperInfo
      // debugger
      this.setState({
        // If user is correct change myTurn to oposite of current state, isTrue == true for user.
        // boss loses a life
        userRapperInfo: {
          name: this.state.userRapperInfo.name,
          lives: this.state.userRapperInfo.lives ,
          myTurn: !this.state.userRapperInfo.myTurn,
          isTrue: true,
          gif: this.state.userRapperInfo.gif
        },
        userRapperLyrics: this.state.userRapperLyrics,
        bossRapperInfo:{
          name: this.state.bossRapperInfo.name,
          lives: this.state.bossRapperInfo.lives - 1,
          myTurn: !this.state.bossRapperInfo.myTurn,
          isTrue: null,
          gif: this.state.bossRapperInfo.gif
        },
        bossRapperLyrics: this.state.bossRapperLyrics,
        questionAnswer: questionAnswer
        })
      } else {
        this.setState({
        // If user is wrong change myTurn to oposite of current state, isTrue == false for boss.
        
          wrongGuessAnswer: userAnswerCorrect,
          userRapperInfo: {
            name: this.state.userRapperInfo.name,
            lives: this.state.userRapperInfo.lives ,
            myTurn: !this.state.userRapperInfo.myTurn,
            isTrue: false,
            gif: this.state.userRapperInfo.gif
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            lives: this.state.bossRapperInfo.lives,
            myTurn: !this.state.bossRapperInfo.myTurn,
            isTrue: null,
            gif: this.state.bossRapperInfo.gif
          },
          bossRapperLyrics: this.state.bossRapperLyrics,
          questionAnswer: questionAnswer
          })
          
      } 
    }else if (turn === "bossTurn") {

      if (!!bossAnswerCorrect[0]){
        this.setState({
          userRapperInfo: {
            name: this.state.userRapperInfo.name,
            lives: this.state.userRapperInfo.lives ,
            myTurn: !this.state.userRapperInfo.myTurn,
            isTrue: null,
            gif: this.state.userRapperInfo.gif
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            lives: this.state.bossRapperInfo.lives,
            myTurn: !this.state.bossRapperInfo.myTurn,
            isTrue: true,
            gif: this.state.bossRapperInfo.gif
          },
          bossRapperLyrics: this.state.bossRapperLyrics,
          questionAnswer: questionAnswer
          })
          
      } else {
        this.setState({
          wrongGuessAnswer: bossAnswerCorrect,
          userRapperInfo: {
            name: this.state.userRapperInfo.name,
            lives:  this.state.userRapperInfo.lives - 1 ,
            myTurn: !this.state.userRapperInfo.myTurn,
            isTrue: null,
            gif: this.state.userRapperInfo.gif
            
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            lives: this.state.bossRapperInfo.lives,
            myTurn: !this.state.bossRapperInfo.myTurn,
            isTrue: false,
            gif: this.state.bossRapperInfo.gif
          },
          bossRapperLyrics: this.state.bossRapperLyrics,
          questionAnswer: questionAnswer
          })
          
      }
    }
  }
  
  
answerFeedback = (lyric) => {
  
  if (!!lyric === true) {
this.setState({userRapperInfo: this.state.userRapperInfo,
userRapperLyrics: this.state.userRapperLyrics,
bossRapperInfo: this.state.bossRapperInfo,
bossRapperLyrics: this.state.bossRapperLyrics
})}


}


backgroundStyle=
  {backgroundImage: `url('${'/images/Background.jpg'}')`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover', 
  padding: 100,
  height: 1000}


  render(){
    console.log(this.state.userRapperInfo.lives, this.state.bossRapperInfo.lives)
    return(

      
  
   <div style={this.backgroundStyle} className="course-image">
      <Grid columns='equal' >
      <Grid.Row >
        <Grid.Column>
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
        <Segment>
            {this.state.userRapperInfo.myTurn === true
              ?
              <LyricContainer 
                lyrics={this.state.userRapperLyrics}
                userInfo={this.state.userRapperInfo}
                bossInfo={this.state.bossRapperInfo}
                onHandleSubmitAnswer={this.onHandleSubmitAnswer}
                answerFeedback={this.answerFeedback}/>
                
              :
              <LyricContainer 
                lyrics={this.state.bossRapperLyrics}
                userInfo={this.state.userRapperInfo}
                bossInfo={this.state.bossRapperInfo}
                onHandleSubmitAnswer={this.onHandleSubmitAnswer}
                answerFeedback={this.answerFeedback}/>
              }
        </Segment>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    <Grid.Row columns={2}> 
    </Grid.Row>
        


      <Grid.Row >
      <Grid.Column>
   
        <Segment>
          
          <UserCard 
              userRapperInfo={this.state.userRapperInfo} 
              userRapperLyrics={this.state.usersRapperLyrics}/>
              
          </Segment>
          
        </Grid.Column>
        <Grid.Column style={{padding:"-200px"}} >
          {/* Feedback if user BOSS answered correctly */}
        { this.state.bossRapperInfo.isTrue 
        ?
        <Grid.Column>
           <Segment>
          <h1>✅</h1>
          </Segment>
        </Grid.Column>
       :
        <Grid.Column>
          
          {this.state.bossRapperInfo.isTrue === null || this.state.bossRapperInfo.isTrue === undefined 
          ?
          <div></div>
          :
          <Segment>
          <div>
          <h1>❌</h1>
          <h3>{this.state.questionAnswer}</h3>
          </div>
          </Segment>
          }
          
        </Grid.Column>
        }

        {/* Feedback if user Rapper answered correctly */}
        { this.state.userRapperInfo.isTrue 
        ?
        <Grid.Column>

        <Segment>
          <h1>✅</h1>
          </Segment>
        </Grid.Column>
       :
        <Grid.Column>
          
          {this.state.userRapperInfo.isTrue === null || this.state.userRapperInfo.isTrue === undefined 
          ?
          <div></div>
          :
          <Segment>
          <div>
          <h1>❌</h1>
          <h3>{this.state.questionAnswer}</h3>
          </div>
          </Segment>
          }
          
        </Grid.Column>
        }
        
        
       
        </Grid.Column>
        <Grid.Column>
          <Segment>
        <BossCard 
            bossRapperInfo={this.state.bossRapperInfo}
            bossRapperLyrics={this.state.bossRapperLyrics}/>
           </Segment>  
        </Grid.Column>
        </Grid.Row>



        <Grid.Row columns={2}>
        
        
        </Grid.Row>
        
      </Grid>
      </div>  
  
  )

  }
  }


