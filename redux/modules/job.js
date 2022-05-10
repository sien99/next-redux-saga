// Intro to ducks model:https://github.com/erikras/ducks-modular-redux, example:https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7

// Actions
export const GET_JOB = "GET_JOB";
const SET_JOB = "SET_JOB";

// Action Creators

export const getJob = (query) => ({
  type: GET_JOB,
  queryAtReducer: query,
});

export const setJob = (job) => ({
  type: SET_JOB,
  job, // equivalent to job:job
});

const initState = {
  job: undefined,
};

// Reducer
export default (state = initState, action) => {
  switch (action.type) {
    // do reducer stuff
    case SET_JOB:
      const { job } = action;
      // eventhough we don't need state here because don't have other actions, its a good practice to return all other state
      return { ...state, job };

    default:
      return state;
  }
};

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
