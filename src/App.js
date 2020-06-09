import React from 'react';

import './App.css';
import Signin from './components/Signin'
import NavBar from './components/NavBar';
import SelectCharCont from './components/SelectCharCont'
import BattleContainer from './components/BattleContainer'
import { Route } from 'react-router-dom'


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

  submitUser = (user) => {
    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(allUsers =>
        allUsers.forEach(pastUser => {
           if(pastUser.username === user.username) {
      this.setState({user: pastUser})
    }}
        )
      )
  }

  selectRapper = (rapper) =>{
    this.setState({
      selectedRapper: rapper
    })
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
        {<NavBar user={this.state.user}/>}
       
          

         <Route  
         exact path='/'
         render={()=>{
          if (this.state.user === null) {
            return <Signin submitUser={this.submitUser}/>
           
        }else if (this.state.selectedRapper === null){
          return <SelectCharCont 
          
          rapperList={this.state.rapperList}
          selectRapper={this.selectRapper}/>

        } else if (this.state.selectedRapper != null) {
          return <BattleContainer 
          
          bossRapper={this.state.bossRapper}   
          selectedRapper={this.state.selectedRapper}/>
          }
        }
      }
    />
  </div>

    );
  }
}

export default App;
