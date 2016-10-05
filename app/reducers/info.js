function fetchInfo(state = {}, action) {
  if(action.type === 'REQUEST_INFO') {
    return action.task;
  }
  return state;
}

export default fetchInfo;
