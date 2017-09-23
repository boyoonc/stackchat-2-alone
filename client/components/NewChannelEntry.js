import React, { Component } from 'react';
import {connect} from 'react-redux'
import {writeChannel, postChannel} from '../store'

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" value={props.newChannel} onChange={props.handleChange} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = function(state){
  return {
    newChannel: state.newChannel
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleChange: function(e){
      dispatch(writeChannel(e.target.value))
    },
    handleSubmit: function(e){
      e.preventDefault()
      const name = e.target.channelName.value
      dispatch(postChannel({name}, ownProps.history))
      dispatch(writeChannelName(''))
    }
  }
}

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)

export default NewChannelEntryContainer
