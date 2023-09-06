function calculateWinner(squares) {
    
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      
      const [a, b, c] = lines[i];
      
      let cutLine = null

      if(i===0||i===1||i===2){
        cutLine = "straight"
      }
      if(i===3||i===4||i===5){
        cutLine="vertical"
      }
      if(i===6){
        cutLine="line45"
      }
      if(i===7){
        cutLine="line135"
      }
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a],lines[i],cutLine];
      
      }
    
    }
    
    return [null];
  
}


  export default calculateWinner;