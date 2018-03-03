function createAction(resource, operation, services) {
  // eg PROJECTS_LIST
  const actionPrefix = `${resource.toUpperCase()}_${operation.toUpperCase()}`;
  // eg services.project.list
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

  // TODO: Do the rest of the operations
  default:
    return null;
  }
}

export default createAction;
