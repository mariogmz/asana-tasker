import React from 'react';
import TaskList from './TaskList';
import TaskContent from './TaskContent';

class Tasker extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchTasksAsync();
  }
  render(){
    return (
      <div className="tasker">
        <TaskList {...this.props}/>
        <TaskContent task={this.props.info}/>
      </div>
    );
  }
}

export default Tasker;
