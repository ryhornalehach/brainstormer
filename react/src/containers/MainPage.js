import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
  }

  render() {

    return (
      <div className='row column'>
        <div className='center-oval waves-effect waves-light'>
          <h3>Welcome to</h3>
          <h1>Brainstormer</h1>
        </div>
      </div>
    )
  }
}

export default MainPage
