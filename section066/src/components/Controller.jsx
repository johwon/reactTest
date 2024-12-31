import './Controller.css'

const Controller = ({onClickButton,onClickSymbol,onClickCal,onClickReset})=>{

    const onClickValue = (e)=>{
        onClickButton(e.target.value);
    };

    const onClick2 = (e)=>{
        onClickSymbol(e.target.value);
    };
    
    const onClick = ()=>{
        onClickCal();
    };

    const onClickR = ()=>{
        onClickReset();
    }
        

    return(
    <div className="controller">
        <button value="1" onClick={onClickValue}>1</button>
        <button value="2" onClick={onClickValue}>2</button>
        <button value="3" onClick={onClickValue}>3</button>
        <button value="+" onClick={onClick2}>+</button>
        <br></br>
        <button value="4" onClick={onClickValue}>4</button>
        <button value="5" onClick={onClickValue}>5</button>
        <button value="6" onClick={onClickValue}>6</button>
        <button value="-" onClick={onClick2}>-</button>
        <br></br>
        <button value="7" onClick={onClickValue}>7</button>
        <button value="8" onClick={onClickValue}>8</button>
        <button value="9" onClick={onClickValue}>9</button>
        <button value="*" onClick={onClick2}>x</button>
        <br></br>
        <button onClick={onClickR}>지우기</button>
        <button value="0" onClick={onClickValue}>0</button>
        <button value="%" onClick={onClick2}>%</button>
        <button onClick={onClick}>=</button>
    </div>
)};

export default Controller;