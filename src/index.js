import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClockApp from './ClockApp';

    const Square = (props) => {
        return (
            <button className="square" 
                onClick={props.onClick}
            >
            {props.value}
            </button>
        );
    };
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
            value={this.props.squares[i]} 
            onClick={()=>this.props.onClick(i)}
        />
      );
    }
    createBoard(row, col){
        let cellCounter = 0;
        const board = [];
        for (let i=0;i<row;i++){
            const columns = [];
            for(let j=0;j<col;j++){
                columns.push(this.renderSquare(cellCounter++))
            }
            board.push(<div key={i} className="board-row">{columns}</div>)
        }
        return board;
    }
    render() {
      return (
        <div>
            {this.createBoard(3,3)}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
      constructor(props){
          super(props);
          this.state = {
              history: [{
                  squares: Array(9).fill(null)
              }],
              xIsNext: true,
              stepNumber: 0,
          }
      }
      handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) return;
        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({
                history: history.concat([{
                    squares:squares
                }]),
                xIsNext: !this.state.xIsNext,
                stepNumber: history.length,
            });
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }
    toggleOrder(){
        const history = this.state.history;
        console.log('history', history);
        const reversedHistory = history.reverse();
        console.log('reversedHistory', reversedHistory);
        this.setState({
            history: reversedHistory
        })
    }
    getLocation = (move) => {
        const locationMap = {
          0: 'row: 1, col: 1',
          1: 'row: 1, col: 2',
          2: 'row: 1, col: 3',
          3: 'row: 2, col: 1',
          4: 'row: 2, col: 2',
          5: 'row: 2, col: 3',
          6: 'row: 3, col: 1',
          7: 'row: 3, col: 2',
          8: 'row: 3, col: 3',
        };
      
        return locationMap[move];
      };
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move)=>{
        const desc = move ? `Go to move #${move}`: 'Go to game start';
        return (
            <li key={move}>
                <div>
                <button onClick={()=>this.jumpTo(move)}>
                    {this.state.stepNumber === move ? <b>{desc}</b>: desc}
                </button>
                {move ? <label style={{marginLeft : '20px'}}>{this.getLocation(move)}</label> : null }
                </div>
            </li>
        );
    });

      let status;
      if(winner){
        status = `Winner: ${winner}`;
      } else{
        status = `Next player: ${this.state.xIsNext ? 'X': 'O'}`;
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares}
                onClick={(i)=>this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <button onClick={()=>this.toggleOrder()}> Toggle</button>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <div><Game /><ClockApp increment="1"/></div>,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  