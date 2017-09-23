import React, { Component } from 'react';
// import store, { updateName } from '../store';
import {connect} from "react-redux"

function NameEntry(props) {

    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={props.handleChange}
          value={props.name}
        />
      </form>
    );
  
}

function mapStateToProps(state){
  return{
    name: state.name
  }
}

function mapDispatchToProps(dispatch){
  return{
    handleChange: function(e){
      dispatch(updateName(e.target.value))
    }
  }
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps)
const NameEntryContainer = connectFunction(NameEntry)

export default NameEntryContainer