// import Immutable from 'seamless-immutable';
// import actionTypes from '../constants/actionTypes';

// const INITIAL_STATE = Immutable.from({
//   isActive: false,
//   isFetched: false,
//   data: {}
// });

// function reducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//   case actionTypes.GET_PROJECT_START:
//     return state.merge({
//       isActive: true
//     }).without('error');

//   case actionTypes.GET_PROJECT_SUCCESS:
//     return state.merge({
//       isActive: false,
//       isFetched: true,
//       data: action.payload.project
//     });

//   case actionTypes.GET_PROJECT_FAILURE:
//     return state.merge({
//       error: action.payload.error,
//       isActive: false
//     });

//   default:
//     return state;
//   }
// }

import api from '../utils/api';

const reducer = api.reducers.projectsItem;

export default reducer;

