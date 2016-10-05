function fetchTasks(state = [], action) {
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.tasks;
    case 'TOGGLE_TASK':
      const i = action.index;
      let toggledTask = state[i];
      toggledTask.completed = !toggledTask.completed;
      return [...state.slice(0, i), toggledTask, ...state.slice(i + 1)];
    case 'REQUEST_INFO':
      return state;
    default:
      return state;
  }
}

export default fetchTasks;
