import React from 'react';
import Board from './components/Board';
import Card from './components/Card';



function App() {
  return (
		<div className="App">
			<main className="flexbox">
        <Board id="board-one" className="board">
          <Card id="card-one"className="card" draggable="true">
            <p>Card one</p>
          </Card>
        </Board>
        <Board id="board-two" className="board">
          <Card id="card-two"className="card" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>
      </main>
		</div>
	);
}

export default App;
