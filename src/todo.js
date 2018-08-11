import _ from "lodash";
import React from "react";
import AddToDoList from "./addtodolist";
export default function Todo(props) {
  const content = props.data;
  const result = _.map(content, (values, i) => {
    return (
      <div className="checkbox" key={values.id}>
        <div className="list" index={values.id} >
          <label>
            <input
              type="checkbox"
              checked={values.completed}
              onChange={props.function}
              id={i}
            />
           <input className='forEdit' type='text' value={values.text} id={i} onChange={props.forEdit} />
          </label>
          {values.completed && <span className="badge">completed</span>}
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <h3>Todo App</h3>
      {result}
    </div>
  );
}
