import React from 'react'

class TaskRow extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="task_row" data-asana-task-id={this.props.id}>
        <div className="task_row-index">#{this.props.index}</div>
        <div className="task_row-name">{this.props.name}</div>
      </div>
    );
  }
}

export default TaskRow;
