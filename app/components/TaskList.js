import React from 'react';
import TaskRow from './TaskRow';

class TaskList extends React.Component {
  constructor() {
    super();
    this.renderTask = this.renderTask.bind(this);
  }
  renderTask(task, index) {
    return (
      <TaskRow key={task.id} index={index} id={task.id}
        completed={task.completed}
        toggleTaskAsync={this.props.toggleTaskAsync}
        requestInfoAsync={this.props.requestInfoAsync}>{task.name}</TaskRow>
    );
  }
  render() {
    return (
      <div>
        {this.props.tasks.map(this.renderTask)}
      </div>
    );
  }
}

export default TaskList;
