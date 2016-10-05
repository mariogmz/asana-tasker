import React from 'react';

class TaskContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const info = this.props.task;
    return (
      <div className="task_content">
        <div className="task_content-title">{info.name}</div>
        <p className="task_content-notes">{info.notes}</p>
        <div className="task_content-details">
          <p className="completed-at">{info.completed_at}</p>
        </div>
      </div>
    );
  }
}

export default TaskContent;
