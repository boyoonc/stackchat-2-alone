import React, { Component } from 'react';
import store, { postMessage, writeMessage } from '../store';
import {connect} from 'react-redux'

function NewMessageEntry (props) {
  
    return (
      <form id="new-message-form" onSubmit={props.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={props.newMessageEntry}
            onChange={props.handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
}

const mapStateToProps = function(state){
  return {
    newMessageEntry: state.newMessageEntry
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return{
    handleChange (evt) {
      store.dispatch(writeMessage(evt.target.value))
    },

  handleSubmit (evt) {
    evt.preventDefault();

    const { name, newMessageEntry } = this.state;
    const content = newMessageEntry;
    const { channelId } = ownProps;

    store.dispatch(postMessage({ name, content, channelId }));
    store.dispatch(writeMessage(''));
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry)