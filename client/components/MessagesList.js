// import React, { Component } from "react";
// import Message from "./Message";
// import NewMessageEntry from "./NewMessageEntry";
// import {changeCurrentChannel} from "../store";
// import { connect } from "react-redux";

// function Messages(props) {
//   const channelId = Number(props.channelId); // because it's a string "1", not a number!
//   const filteredMessages = props.messages.filter(
//     message => message.channelId === channelId
//   );

//   return (
//     <div>
//       <ul className="media-list">
//         {filteredMessages.map(message => (
//           <Message message={message} key={message.id} />
//         ))}
//       </ul>
//       <NewMessageEntry channelId={channelId} />
//     </div>
//   );
// }

// class MessagesListLoader extends Component{
//   componentDidMount () {
//     this.props.changeCurrentChannel(this.props.channel.name);
//   }

//   componentWillReceiveProps (nextProps) {
//     if (nextProps.channel.name !== this.props.channel.name) {
//       this.props.changeCurrentChannel(nextProps.channel.name);
//     }
//   }

//   render () {
//     return (
//       <Messages {...this.props} />
//     );
//   }
// }

// function mapStateToProps(state, ownProps){
//   return {
//     // channelId: ownProps.match.params.channelId,
//     channel: state.channels.find(channel => channel.id === channelId) || { name: '' },
//     messages: state.messages
//   }
// }

// const mapDispatchToProps = function (dispatch) {
//   return {
//     changeCurrentChannel(channelName) {
//       dispatch(changeCurrentChannel(channelName));
//     }
//   };
// };


// const container = connect(mapStateToProps, mapDispatchToProps)(MessagesListLoader)

// export default container;

import React, { Component } from "react";
import Message from "./Message";
import NewMessageEntry from "./NewMessageEntry";
import store from "../store";
import { connect } from "react-redux";

function Messages(props) {
  const channelId = Number(props.channelId); // because it's a string "1", not a number!
  const filteredMessages = props.messages.filter(
    message => message.channelId === channelId
  );
  return (
    <div>
      <ul className="media-list">
        {filteredMessages.map(message => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
      <NewMessageEntry channelId={channelId} />
    </div>
  );
}

function mapStateToProps(state, ownProps){
  return {
    channelId: ownProps.match.params.channelId,
    messages: state.messages
  }
}

const container = connect(mapStateToProps)(Messages)

export default container;
