import React, { Component } from 'react';
import Overview from './components/Overview';
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTask: '',
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ currentTask: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.currentTask),
      currentTask: '',
    });
  }
  render() {
    const { currentTask, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input
              type='text'
              value={currentTask}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit'>Add task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
