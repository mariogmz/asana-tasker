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
