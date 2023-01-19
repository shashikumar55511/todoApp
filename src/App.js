import React from "react";
import Tododata from "./Components/Tododata";
import Tododlist from "./Components/Tododlist";
import{v4 as uuid}from 'uuid';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos:[]
    };
  }
  render(){
    const addTodo=(value)=>{
      const newTodo={
        id:uuid(),
        completed:false,
        title:value
      };
      const updatedArray=[...this.state.todos,newTodo];
      this.setState({
        todos:updatedArray
      });
    };
    const deleteTodo = (todoId)=>{
      const updatedArray=this.state.todos.filter(
        (todo)=>todo.id!==todoId
      );
      this.setState({
        todos:updatedArray
      });

    }
  return (
    <div className="App">
      <Tododata addTodo={addTodo}/>
      <Tododlist todos={this.state.todos} deleteTodo={deleteTodo}/>
   
    </div>
  );
}
}
export default App;