/*
Implement a Tic-Tac-Toe game where two players take turns marking spaces on a 3x3 grid.
Game should determine a winner or a draw.
Requirements:
a. Players take turns placing their marks (X or O) on empty spaces on the grid.
b. The game alternates between the players until a winner is determined or the game ends in a draw.
c. The game should handle invalid moves and provide appropriate feedback.
d. The game should be able to be reset to start a new game.
*/

<script>
import React, { useState } from 'react'
import './App.css'

function App() {
  const [place,setPlace] = useState(null)
  const [innitialState,setinnitialState] = useState([null,null,null,null,null,null,null,null,null])
  const choosePlace =(e) =>{
    if(e.target.value==""){
      setPlace(e.target.id)
    }
  }
  const xClicked =(buttonValue) =>{
    if(place!=null ){
      setinnitialState(old=>{
        const newState = [...old]
        newState[place] = buttonValue
        return newState
    })
    }
  }
  return (
    <div className="app">
      <div className="header">
      <button onClick={e=>xClicked("X")}>X</button>
        <br/>
        <button onClick={e=>xClicked("0")}>0</button>
        
        <table onClick={choosePlace}>

          <tbody>
            <tr className="input">
              <td>
                <input  id="0" value={innitialState[0]}/>
              </td>
              <td>
              <input id="1" value={innitialState[1]}/>
              </td>
              <td>
              <input id="2"  value={innitialState[2]}/>
              </td>
              </tr>
              <tr className="input">
              <td>
                <input id="3"  value={innitialState[3]}/>
              </td>
              <td>
              <input id="4"  value={innitialState[4]}/>
              </td>
              <td>
              <input id="5"  value={innitialState[5]}/>
              </td>
              </tr>
              <tr className="input">
              <td>
                <input id="6"  value={innitialState[6]}/>
              </td>
              <td>
              <input id="7"  value={innitialState[7]}/>
              </td>
              <td>
              <input id="8" value={innitialState[8]}/>
              </td>
              </tr>
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default App
</script>