import React from "react";
class Tododlist extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => {
                  this.props.deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Tododlist;
