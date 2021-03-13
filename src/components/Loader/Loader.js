import React, { Component } from 'react';

import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Circles"
        color="#ffffff" //#3f51b5
        height={40}
        width={40}
        timeout={2000} //2 secs
      />
    );
  }
}
