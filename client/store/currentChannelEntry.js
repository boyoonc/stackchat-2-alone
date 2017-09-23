//i think i'm just bringing channelName to state


const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export function changeCurrentChannel (channelName) {
  const action = { type: CHANGE_CHANNEL, channelName };
  return action;
}

export default function reducer (state = '', action) {

  switch (action.type) {

    case CHANGE_CHANNEL:
      return action.channelName

    default:
      return state;
  }

}
