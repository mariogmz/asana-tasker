require('asana');
import config from '../config';

class AsanaClient {
  // constructor() {
  //   this.client = Asana.Client.create().useAccessToken(config.TOKEN);
  //
  // }
  // getTasks() {
  //   return this.client.users.me().then((user) => {
  //     this.userId = user.id;
  //     this.workspaceId = user.workspaces[0].id;
  //
  //     return this.client.tasks.findAll({
  //       asignee: this.userId,
  //       workspace: this.workspaceId,
  //       opt_fields: 'id,name,assignee_status,completed'
  //     }).bind(this);
  //   })
  //   .then((response) => response.data);
  // }
}

export default AsanaClient;
