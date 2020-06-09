import React from 'react'
import { Card } from 'semantic-ui-react'


export default class LyricCard extends React.Component {
  constructor() {
    super()
    this.state = {
      randomLyric: null
    }

  }

  randomLyric = () => {
    
    const lyricArray = this.props.lyrics
    let randomLyric = lyricArray[Math.floor(Math.random() * lyricArray.length)];
     this.setState({randomLyric: randomLyric})
  }


  
  render(){
    
    return(
      <div>
      {!this.state.randomLyric
      ?
      <div onClick={this.randomLyric}>click here to get lyric</div>
      :
      <h1>
        {this.state.randomLyric.text}
      </h1>
  
    
    }
    </div>

  

    )
  }

}
