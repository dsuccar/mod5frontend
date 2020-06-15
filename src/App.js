import React from 'react';

import './App.css';
import Signin from './components/Signin'
import NewUser from './components/NewUser'
import NavBar from './components/NavBar';
import SelectCharCont from './components/SelectCharCont'
import BattleContainer from './components/BattleContainer'
import EndGame from './components/EndGame'
import WinnerEndGame from './components/WinnerEndGame'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      rapperList: [],
      bossRapper: null,
      selectedRapper: null
    }
  }


 
  componentDidMount(){
    fetch('http://localhost:3000/rappers')
    .then(resp => resp.json())
    .then(rappers => {
      this.setState({
        rapperList: rappers.filter(rap => rap.isboss === false)
      })
    })

    fetch('http://localhost:3000/rappers')
    .then(resp => resp.json())
    .then(rappers => {
      this.setState({
        bossRapper: rappers.find(rap=> rap.isboss===true)
      })
    })
  }


  // Log in with existing user: if username is in database and password matches then it sets user
  submitUser = (user) => {
    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(allUsers =>
        allUsers.forEach(pastUser => {
          
           if(pastUser.username === user.username && pastUser.password === user.password) {
      this.setState({user: pastUser})
      this.props.history.push(`/select_rapper`)
      
        } 
      })
    )

  }

  newUser = (user) => {
    fetch('http://localhost:3000/users/', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    this.setState({user: user})
    this.props.history.push(`/select_rapper`)
        
          } 
        


  selectRapper = (rapper) =>{
    const userObj = {
      artist_id: rapper.id,
      username: this.state.user.name,
      password: this.state.user.password,
      badges:'wind' }
    
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: "PATCH", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    }).then(
      this.setState({
      selectedRapper: rapper
    }))
  }


endGame = (bossRapper,userRapper) => {
  if (bossRapper === 0) {
    
  const userWon =  {

  user_id: this.state.user.id,
  boss_id: this.state.bossRapper.id,
  winner_id: this.state.user.id
  }
    fetch("http://localhost:3000/battles", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userWon)
    })
    this.setState({
      user: this.state.user,
      rapperList: this.state.rapperList,
      bossRapper: this.state.bossRapper,
      selectedRapper: null
    })
    this.props.history.push('/winner_end_game')
    // // console.log(this.state)
    
  } else if (userRapper ===0){
   this.props.history.push('/end_game')
}
}

 handleLogout = (event) => {
    this.setState({userData: null})

  }

  render() {
    // console.log(this.state.rapperList)
    return (
      // <div className="App">
        
      //   {<Signin submitUser={this.submitUser}/> }
      //   {<SelectCharCont 
      //     rapperList={this.state.rapperList}
      //     selectRapper={this.selectRapper}
      //   />}
            
      <div className="App">
             {<NavBar user={this.state.user} logout={this.handleLogout} state={this.state}/>}
             <Switch>
                <Route exact path='/' render={()=>{
                      return <Signin submitUser={this.submitUser}/>}}
                  />

                <Route exact path='/new_user' render={()=>{
                      return <NewUser newUser={this.newUser}/>}}
                  />
                
                <Route exact path='/select_rapper' render={()=>{
                      return <SelectCharCont 
                                rapperList={this.state.rapperList}
                                selectRapper={this.selectRapper}/>}}
                  />
                
                <Route exact path='/battle' render={()=>{
                      return <BattleContainer 
                                bossRapper={this.state.bossRapper}   
                                selectedRapper={this.state.selectedRapper}
                                user = {this.state.user}
                                endGame = {this.endGame}/>}}
                  />
                  <Route exact path='/end_game' component={EndGame}/>
                  <Route exact path='/winner_end_game' component={WinnerEndGame}/>
              </Switch>
      </div>

    //   <div className="App">
    //     {<NavBar user={this.state.user}/>}
    //      <Route  
    //      exact path='/'
    //      render={()=>{
    //       if (this.state.user === null) {
    //         return <Signin submitUser={this.submitUser}/>
           
    //     }else if (this.state.selectedRapper === null){
    //       return <SelectCharCont 
          
    //       rapperList={this.state.rapperList}
    //       selectRapper={this.selectRapper}/>

    //     } else if (this.state.selectedRapper != null) {
    //       return <BattleContainer 
          
    //       bossRapper={this.state.bossRapper}   
    //       selectedRapper={this.state.selectedRapper}
    //       user = {this.state.user}
    //       endGame = {this.endGame}/>
    //       }
    //     }
    //   }
    //   />
    // </div>

    );
  }
}

export default withRouter(App);
