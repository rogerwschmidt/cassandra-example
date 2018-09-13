import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [],
      todo: ''
    }
  }
  componentDidMount(){
    this.getTodos()
  }

  getTodos = () => {
    fetch('/api/todos', {
      method:'GET'
    })
    .then(response => response.json())
    .then(({todos}) => {
      this.setState({ todos })
    })
    .catch(console.log)
  }

  handleSubmit = event => {
    event.preventDefault()
    
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ value: event.target.todo.value })
    })
    .then(response => {
      this.setState({ todo: '' })
      return this.getTodos()
    })
    .catch(console.log)
  }

  handleChange = event => {
    const { name, value } = event.target
    
    if(this.state[name] !== undefined){
      this.setState({ [name]: value})
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="todo" type="text" value={this.state.todo} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <ul>
          {
            this.state.todos.map(todo => {
              return <li key={todo.id}>{todo.value}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
