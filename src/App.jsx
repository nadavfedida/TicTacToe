import Player from "./components/player"
function App() {

  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
