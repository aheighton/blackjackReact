import React, { Component } from 'react';
import PlayerHand from './PlayerHand';
import DealerHand from './DealerHand';

class GameTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td style={{padding:30}}>
              <PlayerHand/>
            </td>
            <td style={{padding:30}}>
              <DealerHand/>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default GameTable;
