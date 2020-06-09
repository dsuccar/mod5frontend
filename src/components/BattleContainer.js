import UserCard from './UserCard'
import LyricContainer from './LyricContainer'
import BossCard from './BossCard'
import React from 'react'
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
  
  componentDidMount(){
  
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

  }))
  
} 


onHandleSubmitAnswer = (answer, turn, event) => {
  event.preventDefault()
  let bossAnswer = this.state.bossRapperLyrics.filter(lyric => lyric.answer === answer)
  let userAnswer = this.state.userRapperLyrics.filter(lyric => lyric.answer === answer)
  debugger
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
            hp: this.state.userRapperInfo.hp - 25,
            myTurn: !this.state.userRapperInfo.myTurn
          },
          userRapperLyrics: this.state.userRapperLyrics,
          bossRapperInfo:{
            name: this.state.bossRapperInfo.name,
            hp: this.state.bossRapperInfo.hp ,
            myTurn: !this.state.bossRapperInfo.myTurn
          },
          bossRapperLyrics: this.state.bossRapperLyrics
          })
      }
    // } else if (turn === "bossTurn") {
    //   if (!!this.state.bossRapperLyrics.filter(lyric => lyric.answer === answer) === true){
    //     this.setState({
    //       userRapperInfo: {
    //         name: this.state.userRapperInfo.name,
    //         bio: this.state.userRapperInfo.bio,
    //         hp: this.state.userRapperInfo.hp,
    //         hometown: this.state.userRapperInfo.hometown,
    //         myTurn: false
    //       },
    //       userRapperLyrics: this.state.userRapperLyrics,
  
    //       bossRapperInfo:{
    //         name: this.state.bossRapperInfo.name,
    //         bio: this.state.bossRapperInfo.bio,
    //         hp: this.state.bossRapperInfo.hp - 25,
    //         hometown: this.state.bossRapperInfo.hometown,
    //         myTurn: true
    //       },
    //       bossRapperLyrics: this.state.bossRapperLyrics
    //       })
    //     } else {
    //       this.setState({
    //         userRapperInfo: {
    //           name: this.state.userRapperInfo.name,
    //           bio: this.state.userRapperInfo.bio,
    //           hp: this.state.userRapperInfo.hp,
    //           hometown: this.state.userRapperInfo.hometown,
    //           myTurn: false
    //         },
    //         userRapperLyrics: this.state.userRapperLyrics,
    
    //         bossRapperInfo:{
    //           name: this.state.bossRapperInfo.name,
    //           bio: this.state.bossRapperInfo.bio,
    //           hp: this.state.bossRapperInfo.hp ,
    //           hometown: this.state.bossRapperInfo.hometown,
    //           myTurn: true
    //         },
    //         bossRapperLyrics: this.state.bossRapperLyrics
    //         })
  
    //     } 

    }
  }



  render(){
    // console.log(this.state.userRapperInfo)
// debugger
    return(
  
      <div>
        {this.state.bossRapperLyrics && 
        <div>
          <BossCard 
            bossRapperInfo={this.state.bossRapperInfo}
            bossRapperLyrics={this.state.bossRapperLyrics}/>

          {this.state.userRapperInfo.myTurn === true
          ?
          <LyricContainer 
            lyrics={this.state.userRapperLyrics}
            userTurn={this.state.userRapperInfo.myTurn}
            bossTurn={this.state.bossRapperInfo.myTurn}
            onHandleSubmitAnswer={this.onHandleSubmitAnswer}/>
          :
          <LyricContainer 
            lyrics={this.state.bossRapperLyrics}
            userTurn={this.state.userRapperInfo.myTurn}
            bossTurn={this.state.bossRapperInfo.myTurn}
            onHandleSubmitAnswer={this.onHandleSubmitAnswer}/>
          }

          <UserCard 
          userRapperInfo={this.state.userRapperInfo} 
          userRapperLyrics={this.state.bossRapperLyrics}/>
        </div>
        }
      </div>

        
  )

  }
  }


