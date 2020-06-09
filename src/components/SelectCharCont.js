import React from 'react'
import RapperCard from './RapperCard'
export default class SelectCharCont extends React.Component {
  constructor(){
    super()
      this.state = {
        searchTerm: ''
      }
    
  }



  render(){
    // console.log(this.props)

    return(
      
      <div>
        {this.props.rapperList.map(rapper => 
        <RapperCard 

        key={rapper.id}
        rapper={rapper}
        selectRapper={this.props.selectRapper}/>
        )}
      </div>
    )
  }

}
