import React from 'react'
import RapperCard from './RapperCard'
import { Grid } from 'semantic-ui-react'


 export default class SelectCharCont extends React.Component {
  constructor(){
    super()
      this.state = {
        searchTerm: ''
      }
    
  }


  selectCharStyle = {
    paddingTop: "12px"
  }
  render(){
    console.log(this.state)

    return(
      
      <Grid>
      
      <Grid.Row columns={3}>
      
          
      
      
      {this.props.rapperList.map(rapper => 
      <Grid.Column style={this.selectCharStyle}>
        <RapperCard 

        key={rapper.id}
        rapper={rapper}
        selectRapper={this.props.selectRapper}/>
        </Grid.Column>
        )}      
      </Grid.Row>     
    </Grid>
      
    )
  }

}
