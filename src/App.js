import React from 'react';
import './App.css';
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
    const renderingdata=this.state.Todo;
    const result=renderingdata.map((content,i)=>{
      return(
      <div className='checkbox' key={content.id}>
        <div className='list'>
          <label>
            <input type='checkbox' checked={content.completed} id={i} onChange={(e)=>this.targetHandler(e)}/>
            {content.text}
          </label>
           {content.completed && <span className='badge'>completed</span> }
        </div>
      </div>);
    });
    return(
    <div className='container'>
      <h3>Todo App</h3>
      {result}
    </div> 
   );
  }
}
export default App;
