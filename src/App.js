import React from "react";
import "./App.css";
import Todo from "./todo";
import Addtodolist from "./addtodolist";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jsonData: data, value: "", id: 3, newValue: "" };
  }
  targetHandler = e => {
    let clone = this.state.jsonData;
    clone[e.target.id].completed = !clone[e.target.id].completed;
    this.setState({ jsonData: clone });
  };
  inputTargetHandler = event => {
    this.setState({ value: event.target.value });
  };
  inputSubmission = (event, prevState) => {
    event.preventDefault();
    this.setState(prevState => {
      return { id: prevState.id + 1 };
    });
    if (this.state.value === "") {
      alert("Please Enter Any One Todo Item");
    } else {
      var inputData = this.state.value;
      data.push({ id: this.state.id, completed: true, text: inputData });
      this.setState({ value: "" });
    }
  };
  editTodo = event => {
    let dataClone = this.state.jsonData;
    dataClone[event.target.id].text = event.target.value;
    this.setState({ jsonData: dataClone });
  };
  render() {
    return (
      <div>
        <Todo
          data={this.state.jsonData}
          function={e => this.targetHandler(e)}
          forEdit={event => this.editTodo(event)}
        />
        <Addtodolist
          submit={event => this.inputSubmission(event)}
          fetch={this.state.value}
          target={this.inputTargetHandler}
        />
      </div>
    );
  }
}
export default App;
