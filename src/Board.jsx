import SquareButton from "./components/squareButton"
import calculateWinner from "./helper/calculatedWinner";

const PlayingBoard = ({ Indexes,cutLine,is_X_in_Used, square, onPlay })=>{

    const handleClick = (i)=>{

        const dummySquareArray = square.slice()

        const [winner] = calculateWinner(square)

        if(square[i]||winner){
            return;
        }
        
        if(is_X_in_Used){

            dummySquareArray[i]='X'

        }

        if(!is_X_in_Used){

            dummySquareArray[i]='O'

        }
        
        onPlay(dummySquareArray)
    }
    
    
    return(
        <div style={{height:'100%',width:'100%'}}>

            <div>
                <div style={{display:'flex',height:'80px'}}>
                    <SquareButton classname={Indexes?.includes(0)&&cutLine} value={square[0]} handleClick={()=>handleClick(0)} />
                    <SquareButton classname={Indexes?.includes(1)&&cutLine} value={square[1]} handleClick={()=>handleClick(1)}/>
                    <SquareButton classname={Indexes?.includes(2)&&cutLine} value={square[2]} handleClick={()=>handleClick(2)} />
                </div>
                <div style={{display:'flex',height:'80px'}}>
                    <SquareButton classname={Indexes?.includes(3)&&cutLine} value={square[3]} handleClick={()=>handleClick(3)} />
                    <SquareButton classname={Indexes?.includes(4)&&cutLine} value={square[4]} handleClick={()=>handleClick(4)} />
                    <SquareButton classname={Indexes?.includes(5)&&cutLine} value={square[5]} handleClick={()=>handleClick(5)} />
                </div>
                <div style={{display:'flex',height:'80px'}}>
                    <SquareButton classname={Indexes?.includes(6)&&cutLine} value={square[6]} handleClick={()=>handleClick(6)} />
                    <SquareButton classname={Indexes?.includes(7)&&cutLine} value={square[7]} handleClick={()=>handleClick(7)} />
                    <SquareButton classname={Indexes?.includes(8)&&cutLine} value={square[8]} handleClick={()=>handleClick(8)} />
                </div>
            </div>
        </div>
    )
}

export default PlayingBoard;