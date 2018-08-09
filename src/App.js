import React from 'react';
import './App.css';
import Structure from './structure'
const DATA=[
  {id:1,completed:true,text:'abc'},
  {id:2,completed:true,text:'abc'}
]
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={Todo:DATA};
  }
  targetHandler=(e)=>{
    let clone = this.state.Todo;
    clone[e.target.id].completed = !clone[e.target.id].completed;
    this.setState( {Todo:clone});
  } 
  render(){
    return(
      <div>
      <Structure data={this.state.Todo} function={(e)=>this.targetHandler(e)}/></div>
    );
  }
}
export default App;
