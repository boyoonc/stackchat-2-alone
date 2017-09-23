import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import store from "../store"; //i think this should go away now
import { connect } from "react-redux";
import {withRouter} from 'react-router'

function ChannelList(props) {
  return (
    <ul>
    {props.channels.map(channel=>{
      return(
      <li key={channel.id}>
        <NavLink to={`/channels/${channel.id}`} activeClassName="active">
          <span># {channel.name}</span>
          <span className="badge">
            {props.messages.filter(message => message.channelId === channel.id).length}
          </span>
        </NavLink>
      </li>
             )
    })}
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    messages: state.messages
  };
}
const connectFunction = connect(mapStateToProps);
const ChannelListContainer = connectFunction(ChannelList);

export default withRouter(ChannelListContainer);
