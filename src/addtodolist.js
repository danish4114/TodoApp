import React from "react";
class Addtodolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <form>
          <label>Todo</label>
          <input
            type="text"
            placeholder="Add todo list"
            value={this.props.fetch}
            className="form-control"
            onChange={this.props.target}
          />
          <button
            className="btn btn-normal"
            onClick={this.props.submit}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Addtodolist;
