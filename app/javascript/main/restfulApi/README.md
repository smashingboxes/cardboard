# Usage

```js
// src/utils/api.js
import Api from '../restfulApi';

const api = new Api({
  resources: {
    projects: {},
    stories: {}
  }
});

export default api;
```

You'll also need to add the following to your reducer:

```js
// src/reducers/index.js

import api from '../utils/api';

export default combineReducers({
  form,
  ...api.reducers
});

```

Then in your components, you can use the `bindResourceActions` function to bind your actions like so:

```js
function mapDispatchToProps(dispatch) {
  return {
    actions: api.bindResourceActions(dispatch)
  };
}
connect(mapStateToProps, mapDispatchToProps)
```

And call the actions to make network requests like the following:

```js
// GET /api/v1/projects
api.actions.projects.list();
// GET /api/v1/projects/1
api.actions.projects.show({ id: 1 });
// POST /api/v1/projects
api.actions.projects.create(body);
// PUT /api/v1/projects/1
api.actions.projects.list({ id: 1 }, body);
// PUT /api/v1/projects/1
api.actions.projects.delete({ id: 1 });
```

And the resulting data will be stored in redux automatically, and can be accessed via:

```js
// For the list version
state.projects.data
// For the item version
state.projectsItem.data
```
