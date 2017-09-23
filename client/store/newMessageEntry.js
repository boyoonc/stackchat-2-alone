import axios from 'axios';
import socket from './socket';

// ACTION TYPES

const WRITE_MESSAGE = 'WRITE_MESSAGE';

// ACTION CREATORS

export function writeMessage (content) {
  const action = { type: WRITE_MESSAGE, content };
  return action;
}

// REDUCER


function newMessageReducer (state = '', action) {

  switch (action.type) {

    case WRITE_MESSAGE:
      return {
        ...state,
        newMessageEntry: action.content
      };

    default:
      return state;
  }
}


export default newMessageReducer;
