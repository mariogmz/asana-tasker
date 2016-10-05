import Asana from 'asana';
import config from '../config';

class AsanaClient {
  constructor() {
    this.client = Asana.Client.create().useAccessToken(config().TOKEN);
  }
  getTasks() {
    return this.client.authorize()
    .then(() => this.client.users.me())
    .then((user) => {
      this.user = user;
      this.workspace = user.workspaces[0];

      return this.client.tasks.findAll({
        assignee: this.user.id,
        workspace: this.workspace.id,
        opt_fields: 'id,name,assignee_status,completed'
      });
    })
    .then((collection) => {debugger;collection.data;});
  }
}

export default AsanaClient;
