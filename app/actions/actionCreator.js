import AsanaClient from '../services/Asana';

function fetchTasks(tasks) {
  return {
    type: 'FETCH_TASKS',
    tasks
  };
}

export function fetchTasksAsync() {
  return function(dispatch) {
    let client = new AsanaClient();
    return client.getTasks()
      .then((collection) =>  dispatch(fetchTasks(collection.data)))
      .catch(() => dispatch(fetchTasks([])));
  }
}

export function toggleTask(index, id) {
  return {
    type: 'TOGGLE_TASK',
    index,
    id
  };
}
