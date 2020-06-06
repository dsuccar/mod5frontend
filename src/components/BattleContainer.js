import UserCard from './UserCard'
import LyricCard from './LyricCard'
import BossCard from './BossCard'
import React from 'react'

export default class BattleContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedRapper: ''
    }

  }


    

  render(){
 console.log(this.props.selectedRapper)
    return(
      <div>

            <UserCard selectedRapper={this.props.selectedRapper}/>
            <LyricCard />
            <BossCard />
            
      </div>
  

    )
  }

}
