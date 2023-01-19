import React from "react";
class Tododata extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: " ",
    };
  }
  render() {
    const updateTodo = (e) => {
      this.setState({
        todo: e.target.value
      });
    };
    const addTodoList = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.todo);
    };
    return (
      <form onSubmit={addTodoList}>
        <input
          placeholder="enter data"
          value={this.state.todo}
          onChange={updateTodo}
        />
        <button type="Submit">submit</button>
      </form>
    );
  }
}
export default Tododata;
