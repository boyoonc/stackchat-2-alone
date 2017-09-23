import axios from 'axios';
import socket from './socket';


// ACTION TYPES

const WRITE_CHANNEL = 'WRITE_CHANNEL'

// ACTION CREATORS

export function writeChannel(channelName){
  return {type: WRITE_CHANNEL, channelName}
}

// REDUCER


function newChannelReducer (state = '', action) {

  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.channelName
      };

    default:
      return state;
  }

}

export default newChannelReducer;
