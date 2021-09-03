import React, { Component } from 'react';

class ActionButtons extends Component {
  render() {
    return (
      <div>
        <form action = "/hit" method = "GET">
          <button id = "hit">Hit!</button> <button>Stick!</button>
        </form>
      </div>
    );
  }
}

export default ActionButtons;