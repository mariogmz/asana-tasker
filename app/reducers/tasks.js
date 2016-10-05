function fetchTasks(state = [], action) {
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.tasks;
    case 'COMPLETE_TASK':
      return state;
    default:
      return state;
  }
}

export default fetchTasks;
