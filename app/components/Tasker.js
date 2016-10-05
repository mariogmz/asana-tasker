import React from 'react'

class Tasker extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchTasksAsync();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.tasks !== this.props.tasks) {
      this.props.fetchTasksAsync();
    }
  }
  renderTask(task) {
    return (
      <li key={task.id}>{task.name}</li>
    );
  }
  render(){
    return (
      <ul>
        {this.props.tasks.map(this.renderTask)}
      </ul>
    );
  }
}

export default Tasker;
