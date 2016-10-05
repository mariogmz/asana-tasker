function fetchTasks(state = [], action) {
  let i;
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.tasks;
    case 'TOGGLE_TASK':
      i = action.index;
      let toggledTask = state[i];
      toggledTask.completed = !toggledTask.completed;
      return [...state.slice(0, i), toggledTask, ...state.slice(i + 1)];
      break;
    case 'REQUEST_INFO':
      return state.map((task) => {
        task.active = task.id === action.task.id
        return task;
      });
    default:
      return state;
  }
}

export default fetchTasks;
