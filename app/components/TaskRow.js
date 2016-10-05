import React from 'react';

class TaskRow extends React.Component {
  constructor() {
    super();
    this.markAsComplete = this.markAsComplete.bind(this);
  }
  markAsComplete(e) {
    e.stopPropagation();
    const {index, id} = this.props;
    this.props.toggleTaskAsync(index, id, !this.props.completed);
  }
  render() {
    return (
      <div className="task_row"
        data-asana-id={this.props.id}>
        <div className="task_row-index">
          <label htmlFor={this.props.id}>#{this.props.index + 1}
            <input type="checkbox"
              id={this.props.id}
              ref="checkbox"
              className="task_row-index--checkbox"
              checked={this.props.completed}
              onChange={this.markAsComplete}/>
          </label>
        </div>
        <div className="task_row-name">{this.props.children}</div>
      </div>
    );
  }
}

export default TaskRow;
