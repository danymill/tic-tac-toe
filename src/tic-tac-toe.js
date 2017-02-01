class TicTacToe {
  constructor() {
    this.activeUser = 0;
    this.board = [];
    this._isFinished = false;
    this._winner = null;
    for (let i = 0; i < 3; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 3; j += 1) {
        this.board[i][j] = null;
      }
    }
  }

  getCurrentPlayerSymbol() {
    return (this.activeUser) ? 'o' : 'x';
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex] !== null) {
      return;
    }
    this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    if (this.noMoreTurns()) {
      this._isFinished = true;
    }
    this._winner = this.getWinner();
    if (this._winner !== null) {
      this._isFinished = true;
    }
    this.activeUser = +!this.activeUser;
  }

  isFinished() {
    return this._isFinished;
  }

  getWinner() {
    for (let i = 0; i < 3; i += 1) {
      // check cols
      let col = this.board[0][i];
      if (col !== null && col == this.board[1][i] && col == this.board[2][i]) {
        return col;
      }

      // check rows
      let row = this.board[i][0];
      if (row !== null && row == this.board[i][1] && row == this.board[i][2]) {
        return row;
      }
    }
    //check diagonals
    let diag = this.board[1][1];
    if (diag !== null && ((diag == this.board[0][0] && diag == this.board[2][2]) || (diag == this.board[0][2] && diag == this.board[2][0]))) {
      return diag;
    }
    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (this.board[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    return !!(this.noMoreTurns() && this._winner === null);
  }

  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
