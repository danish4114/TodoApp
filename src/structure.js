import _ from 'lodash';
import React from 'react';
export default function Structure(props){
    const content=props.data;
    const result=_.map(content,(values,i)=>{
      return(
      <div className='checkbox' key={values.id} >
        <div className='list'>
          <label>
            <input type='checkbox' checked={values.completed} id={i} onChange={props.function} />
            {values.text}
          </label>
            {values.completed && <span className='badge'>completed</span> }
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
 