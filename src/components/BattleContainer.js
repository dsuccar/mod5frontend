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


//get random set of lyrics bas

// getLyrics = () => {
//   if(this.state.bossRapperInfo.myTurn === true){
//     let playersTurnLyrics = this.state.bossRapperLyrics
//   } else {
//     let playersTurnLyrics = this.state.userRapperLyrics
//   }
// }


  render(){
    // console.log(this.state.userRapperInfo)

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
            lyrics={this.state.userRapperLyrics}/>
          :
          <LyricContainer 
            lyrics={this.state.bossRapperLyrics}/>
          }

          <UserCard userRapperInfo={this.state.userRapperInfo} userRapperLyrics={this.state.bossRapperLyrics}/>
        </div>
        }
      </div>

        
  )

  }
  }


