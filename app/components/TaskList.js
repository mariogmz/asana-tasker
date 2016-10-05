import React from 'react';
import TaskRow from './TaskRow';

class TaskList extends React.Component {
  constructor() {
    super();
  }
  renderTask(task, index) {
    return (
      <TaskRow key={task.id} index={index + 1} {...task}/>
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
