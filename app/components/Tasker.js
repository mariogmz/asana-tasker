import React from 'react';
import TaskList from './TaskList';

class Tasker extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchTasksAsync();
  }
  render(){
    return (
      <TaskList {...this.props}/>
    );
  }
}

export default Tasker;
