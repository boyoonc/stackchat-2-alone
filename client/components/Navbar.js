// import React, { Component } from 'react';
// import NameEntry from './NameEntry';
// import { connect } from 'react-redux'

// function Navbar (props) {

// 	const {currentChannel} = props

//     return (
//       <nav>
//         <h3>{props.currentChannel}</h3>
//         <NameEntry />
//       </nav>
//     );

// }

// const mapStateToProps = function(state){
// 	return {
// 		currentChannel: state.currentChannel
// 	}
// }

// export default connect (mapStateToProps)(Navbar)

import React, { Component } from 'react';
import NameEntry from './NameEntry';

export default class Navbar extends Component {

  render () {
    return (
      <nav>
        <h3># channelname goes here</h3>
        <NameEntry />
      </nav>
    );
  }
}