import axios from 'axios';

// ACTION TYPES

const UPDATE_NAME = 'UPDATE_NAME';

// ACTION CREATORS

export function updateName (name) {
  const action = { type: UPDATE_NAME, name };
  return action;
}

// REDUCER

function nameReducer (state = 'Pie!!', action) {

  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };

    default:
      return state;
  }

}

export default nameReducer;
