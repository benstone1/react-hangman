import React from 'react';

const initialState = {
  displayWord: ""
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
  render() {
    return (
      <div>
        <p> This is the Hangman Board </p>
        <p> _ _ _ _</p>
      </div>
    )
  }
}

export default Board;
