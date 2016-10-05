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

function toggleTask(index, id) {
  return {
    type: 'TOGGLE_TASK',
    index,
    id
  };
}

export function toggleTaskAsync(index, id, markAs) {
  return function(dispatch) {
    let client = new AsanaClient();
    return client.updateTask(id, markAs)
      .then((response) => dispatch(toggleTask(index, response.id)))
      .catch(() => dispatch(toggleTask()));
  }
}

function requestInfo(task) {
  return {
    type: 'REQUEST_INFO',
    task
  };
}

export function requestInfoAsync(id) {
  return function(dispatch) {
    let client = new AsanaClient();
    return client.taskInfo(id)
      .then((task) => dispatch(requestInfo(task)))
      .catch(() => dispatch(requestInfo(info)));
  }
}
