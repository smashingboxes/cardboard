function createAction(resource, operation, services) {
  // eg PROJECTS_LIST
  const actionPrefix = `${resource.toUpperCase()}_${operation.toUpperCase()}`;
  // eg services.projects.list
  const service = services[resource][operation];

  switch (operation) {
  case 'list':
    return () => {
      return (dispatch) => {
        dispatch({ type: `${actionPrefix}_START` });

        return service()
          .then((response) => {
            dispatch({
              type: `${actionPrefix}_SUCCESS`,
              payload: { response }
            });
          });
        // TODO: Handle failures
      };
    };
  case 'retrieve':
    return (id) => {
      return (dispatch) => {
        dispatch({ type: `${actionPrefix}_START` });

        return service(id)
          .then((response) => {
            dispatch({
              type: `${actionPrefix}_SUCCESS`,
              payload: { response }
            });
          });
        // TODO: Handle failures
      };
    };
  case 'create':
    return (body) => {
      return (dispatch) => {
        dispatch({ type: `${actionPrefix}_START` });

        return service(body)
          .then((response) => {
            dispatch({
              type: `${actionPrefix}_SUCCESS`,
              payload: { response }
            });
          });
        // TODO: Handle failures
      };
    };
  case 'update':
    return (id, body) => {
      return (dispatch) => {
        dispatch({ type: `${actionPrefix}_START` });

        return service(id, body)
          .then((response) => {
            dispatch({
              type: `${actionPrefix}_SUCCESS`,
              payload: { response }
            });
          });
        // TODO: Handle failures
      };
    };
  case 'delete':
    return (id) => {
      return (dispatch) => {
        dispatch({ type: `${actionPrefix}_START` });

        return service(id)
          .then((response) => {
            dispatch({
              type: `${actionPrefix}_SUCCESS`,
              payload: { response }
            });
          });
        // TODO: Handle failures
      };
    };
  default:
    return null;
  }
}

export default createAction;
