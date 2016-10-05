import React from 'react';
import TaskRow from './TaskRow';

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
  renderTask(task, index) {
    return (
      <TaskRow key={task.id} index={index + 1} {...task}/>
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
