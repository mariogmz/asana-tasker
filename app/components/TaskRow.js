import React from 'react';

class TaskRow extends React.Component {
  constructor() {
    super();
    this.markAsComplete = this.markAsComplete.bind(this);
  }
  markAsComplete(e) {
    e.preventDefault();
    const {index, id} = this.props;
    this.props.toggleTask(index, id);
  }
  render() {
    return (
      <div className="task_row"
        data-asana-id={this.props.id}>
        <div className="task_row-index">#{this.props.index + 1}</div>
        <div className="task_row-name" onClick={this.markAsComplete}>{this.props.children} {this.props.completed?'Completed':'Incomplete'}</div>
      </div>
    );
  }
}

export default TaskRow;
