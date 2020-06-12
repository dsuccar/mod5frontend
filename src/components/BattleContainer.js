import UserCard from './UserCard'
import LyricContainer from './LyricContainer'
import BossCard from './BossCard'
import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
// import { Card } from 'semantic-ui-react'

export default class BattleContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      userRapperInfo: {
        name: null,
        bio: null,
        hp: 100,
        hometown: null,
        myTurn: null
      },
      userRapperLyrics: null,
      bossRapperInfo: {
        name: null,
        bio: null,
        hp: 100,
        hometown: null,
        myTurn: null
      },
      bossRapperLyrics: null,
     
    }

  }
  componentDidUpdate(){
    this.props.endGame(this.state.bossRapperInfo.hp,this.state.userRapperInfo.hp)
  }
  componentDidMount(){
    console.log(this.props.selectedRapper)

  fetch(`http://localhost:3000/rappers/${this.props.selectedRapper.id}`)
  .then(resp => resp.json())
  .then(userRapper => this.setState({
    userRapperInfo: {
      name: userRapper.name,
      bio: userRapper.bio,
      hp: userRapper.hp,
      hometown: userRapper.hometown,
      myTurn: true
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
      hp: bossRapper.hp,
      hometown: bossRapper.hometown,
      myTurn: false
    },
    bossRapperLyrics: bossRapper.lyrics

  })
  )
  
} 


onHandleSubmitAnswer = (answer, turn, event) => {
  event.preventDefault()
  let bossAnswer = this.state.bossRapperLyrics.filter(lyric => lyric.answer === answer)
  let userAnswer = this.state.userRapperLyrics.filter(lyric => lyric.answer === answer)
  
  if (turn === "userTurn") {
    if ( userAnswer.length > 0){
      this.setState({
        userRapperInfo: {
          name: this.state.userRapperInfo.name,
          hp: this.state.userRapperInfo.hp ,
          myTurn: !this.state.userRapperInfo.myTurn
        },
        userRapperLyrics: this.state.userRapperLyrics,
        bossRapperInfo:{
          name: this.state.bossRapperInfo.name,
          hp: this.state.bossRapperInfo.hp - 25,
          myTurn: !this.state.bossRapperInfo.myTurn
        },
        bossRapperLyrics: this.state.bossRapperLyrics
        })
      } else {
        this.setState({
          userRapperInfo: {
            name: this.state.userRapperInfo.name,
            hp: this.state.userRapperInfo.hp ,
            myTurn: !this.state.userRapperInfo.myTurn
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            hp: this.state.bossRapperInfo.hp,
            myTurn: !this.state.bossRapperInfo.myTurn
          },
          bossRapperLyrics: this.state.bossRapperLyrics
          })
          
      } 
    }else if (turn === "bossTurn") {

      if (bossAnswer.length > 0){
        this.setState({
          userRapperInfo: {
            name: this.state.userRapperInfo.name,
            hp: this.state.userRapperInfo.hp ,
            myTurn: !this.state.userRapperInfo.myTurn
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            hp: this.state.bossRapperInfo.hp,
            myTurn: !this.state.bossRapperInfo.myTurn
          },
          bossRapperLyrics: this.state.bossRapperLyrics
          })
          
      } else {
        this.setState({
          userRapperInfo: {
            name: this.state.userRapperInfo.name,
            hp:  this.state.userRapperInfo.hp - 25 ,
            myTurn: !this.state.userRapperInfo.myTurn
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            hp: this.state.bossRapperInfo.hp,
            myTurn: !this.state.bossRapperInfo.myTurn
          },
          bossRapperLyrics: this.state.bossRapperLyrics
          })
          
      }
    }
  }
colorChange = (turn) => {



}



  render(){
  

    return(

      
  
      

      <Grid columns='equal'>
      
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
                onHandleSubmitAnswer={this.onHandleSubmitAnswer}/>
                
              :
              <LyricContainer 
                lyrics={this.state.bossRapperLyrics}
                userInfo={this.state.userRapperInfo}
                bossInfo={this.state.bossRapperInfo}
                onHandleSubmitAnswer={this.onHandleSubmitAnswer}/>
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
        <Grid.Column >
        
       
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
      
  
  )

  }
  }


