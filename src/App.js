import {useState} from 'react';
import './App.css';
import PlayingBoard from './Board';
import calculateWinner from './helper/calculatedWinner';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function App() {

  const [history,setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const [Player,setPlayer] = useState({firstPlayer:'',secondPlayer:''})

  const is_X_in_Used = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  
  const setPlayerNames = (event)=>{

    event.preventDefault()

    const form = event.target;
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries());
    console.log('formJson : ',formJson);
    setPlayer(formJson)

  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move} style={{color:'yellow'}}>
        <Button variant="contained" onClick={() => jumpTo(move)}>{description}</Button>
      </li>
    );
  });


  const [winner,Indexes,cutLine] = calculateWinner(currentSquares);

    let status;

    if (winner) {

      status = 'Winner: ' + winner;
    
    } else {
    
        status = is_X_in_Used ? 'X' : 'O';
    
    }

  return (

    <div style={{width:'100%',height:'100vh',backgroundColor:'#282c34'}}>
      
      {(Player?.firstPlayer&&Player?.secondPlayer)?<div>

        <div>
          
          <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
            
            <h3 style={{color:'gray'}}>Player One : <span style={{color:(status==="X"||winner==='X')?'yellowgreen':'red'}}>{Player?.firstPlayer}</span></h3>
          
            <h3 style={{color:'gray'}}>Player Two : <span style={{color:(status==="O"||winner==='O')?'green':'red'}}>{Player?.secondPlayer}</span></h3>

          </div>

        </div>

        {winner&&<div style={{display:'flex',justifyContent:'center'}}>
            <h3 style={{color:'gray'}}>Winner is : <span style={{color:'yellow'}}>{winner==='X'?Player?.firstPlayer:Player?.secondPlayer}</span></h3>
        </div>}
        
        <div style={{display:'flex',justifyContent:'center',marginTop:'40px',marginLeft:'50px',gap:'50px'}}>
        
          <div style={{marginTop:'20px'}}>
         
            <PlayingBoard 
              winner={winner}
              Indexes={Indexes}
              cutLine={cutLine}
              is_X_in_Used={is_X_in_Used} 
              square={currentSquares} 
              onPlay={handlePlay}
            />            
          </div>
        
          <div>
        
            <ol style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'30px',gridTemplateRows:'auto'}}>{moves}</ol>
        
          </div>
        
        </div>
      
      </div>:
        <div style={{display:'flex',width:'100%',height:'100vh',backgroundColor:'white',justifyContent:'center'}}>
          
          <form onSubmit={setPlayerNames}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' , marginTop:'200px' }}>     
              <AccountCircle sx={{color:'gray',mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" required name='firstPlayer' label="firstPlayer" variant="standard" />
            </Box><br/>
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
              <AccountCircle sx={{color:'gray',mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" required name='secondPlayer' label="secondPlayer" variant="standard" />
            </Box><br/><br/>
            <Button style={{width:'100%'}} type='submit' variant="contained" size='small'>Play</Button>
          </form>

        </div>}
    </div>
  );
}

export default App;
