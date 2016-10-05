function fetchTasks(state = [], action) {
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.tasks;
    default:
      return state;
  }
}

export default fetchTasks;
