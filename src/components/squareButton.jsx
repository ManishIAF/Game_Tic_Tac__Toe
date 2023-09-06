const SquareButton = ({value,handleClick,classname})=>{

    return(
        <button 
            className={"square-button " + (value === "X" ? "x" : "o") + " " + classname} 
            style={{fontSize:'60px',width:'80px',height:'80px'}} 
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

export default SquareButton;